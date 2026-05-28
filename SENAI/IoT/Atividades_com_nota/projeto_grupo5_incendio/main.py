from machine import Pin, ADC, PWM
from utime import ticks_ms, ticks_diff, sleep_ms
from dht import DHT22
from picozero import Speaker
from servo import Servo
from hcsr04 import HCSR04

"""
SISTEMA AUTÔNOMO DE DETECÇÃO E COMBATE A INCÊNDIO

1. Monitora temperatura e umidade.
2. Detecta condições de risco.
3. Realiza varredura com servo e LDR.
4. Localiza o foco pela maior intensidade luminosa.
5. Mede a distância com o ultrassônico.
6. Ajusta o motor 28BYJ-48 conforme a distância detectada.
"""

led_red = Pin(14, Pin.OUT)
buzzer = PWM(Pin(15))

servo_motor = Servo(pin=1)

in1 = Pin(19, Pin.OUT)
in2 = Pin(20, Pin.OUT)
in3 = Pin(21, Pin.OUT)
in4 = Pin(22, Pin.OUT)

ultrassonic = HCSR04(
    trigger_pin=17,
    echo_pin=16,
    echo_timeout_us=30000
)

led_red.off()
buzzer.freq(1000)
buzzer.duty_u16(0)

sensor_dht = DHT22(Pin(18))

#sensor_gas = ADC(26)

sensor_ldr = ADC(27)

angulo = 0
melhor_angulo = 0
maior_luz = 0

posicao_stepper = 0
indice_stepper = 0

tempo_sensores = ticks_ms()
tempo_servo = ticks_ms()

incendio_detectado = False

sequencia = [
    [1,0,0,0],
    [1,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [0,0,1,0],
    [0,0,1,1],
    [0,0,0,1],
    [1,0,0,1]
]

def limitador(valor, minimo, maximo):
    if valor < minimo:
        return minimo

    if valor > maximo:
        return maximo

    return valor

def valor_rpm_por_distancia(d_cm, d_min=20, d_max=400, rpm_min=10, rpm_max=30):
    d_cm = limitador(d_cm, d_min, d_max)

    u = (d_cm - d_min) / (d_max - d_min)

    rpm = rpm_min + u * (rpm_max - rpm_min)

    return rpm

def freq_stepper(d_cm, passos_por_volta=2048):
    rpm = valor_rpm_por_distancia(d_cm)

    freq = (rpm * passos_por_volta) / 60

    return freq

def intervalo_pulsos(d_cm):
    freq = freq_stepper(d_cm)

    intervalo_ms = int(1000 / freq)

    if intervalo_ms < 1:
        intervalo_ms = 1

    return intervalo_ms

def passos_por_distancia(d_cm, d_min=20, d_max=400, passos_min=50, passos_max=2000):
    d_cm = limitador(d_cm, d_min, d_max)

    u = (d_cm - d_min) / (d_max - d_min)

    passos = passos_min + u * (passos_max - passos_min)

    return int(passos)

def aplicar_etapa(etapa):
    in1.value(etapa[0])
    in2.value(etapa[1])
    in3.value(etapa[2])
    in4.value(etapa[3])

def desligar_stepper():
    aplicar_etapa([0,0,0,0])

def girar_stepper(distancia_cm):
    global posicao_stepper
    global indice_stepper

    destino = passos_por_distancia(distancia_cm)

    diferenca = destino - posicao_stepper

    if diferenca >= 0:
        direcao = 1
    else:
        direcao = -1

    passos = abs(diferenca)

    intervalo = intervalo_pulsos(distancia_cm)

    print(f"RPM DO STEPPER: {valor_rpm_por_distancia(distancia_cm):.2f}")
    print(f"FREQUÊNCIA: {freq_stepper(distancia_cm):.2f}")
    print(f"INTERVALO: {intervalo} ms")
    print(f"PASSOS: {passos}")

    for i in range(passos):

        indice_stepper = (indice_stepper + direcao) % 8

        aplicar_etapa(sequencia[indice_stepper])

        sleep_ms(intervalo)

    desligar_stepper()

    posicao_stepper = destino

while True:
    agora = ticks_ms()

    if ticks_diff(agora, tempo_sensores) >= 1000:

        tempo_sensores = agora

        sensor_dht.measure()

        temp = sensor_dht.temperature()
        umid = sensor_dht.humidity()

        #gas = sensor_gas.read_u16()

        print(f"Temperatura: {temp:.2f}°C")
        print(f"Umidade: {umid:.2f}%")
        #print(f"Nível de gás/fumaça: {gas}")
        print()
    
        #if umid <= 30 and temp >= 40 and gas >= 55949 and incendio_detectado == False:
        if umid <= 90 and temp >= 20 and incendio_detectado == False:

            incendio_detectado = True

            angulo = 0
            melhor_angulo = 0
            maior_luz = 0

            led_red.on()
            buzzer.duty_u16(30000)  # volume (0 a 65535)

            print("RISCO DE INCÊNDIO DETECTADO")
            print("INICIANDO VARREDURA")

    if incendio_detectado:

        if ticks_diff(agora, tempo_servo) >= 200:

            tempo_servo = agora

            servo_motor.move(angulo)

            sleep_ms(100)

            leitura_ldr = sensor_ldr.read_u16()

            print(f"Ângulo: {angulo}")
            print(f"Luz: {leitura_ldr}")

            if leitura_ldr > maior_luz:
                maior_luz = leitura_ldr
                melhor_angulo = angulo

            angulo += 5

            if angulo > 180:

                print("FOCO DE FOGO ENCONTRADO")
                print(f"MELHOR ÂNGULO: {melhor_angulo}")

                servo_motor.move(melhor_angulo)

                sleep_ms(100)

                distancia_cm = ultrassonic.distance_cm()

                if distancia_cm > 0:

                    print(f"Distância do fogo: {distancia_cm:.2f} cm")

                    print("SISTEMA DE DEFESA ATIVADO")

                    girar_stepper(distancia_cm)

                incendio_detectado = False

                angulo = 0
                melhor_angulo = 0
                maior_luz = 0

    sleep_ms(5)