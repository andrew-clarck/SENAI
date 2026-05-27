from machine import Pin, ADC
from utime import ticks_ms, ticks_diff, sleep_ms, sleep_us
from dht import DHT22
from picozero import Speaker
from servo import Servo
from hcsr04 import HCSR04

"""
SISTEMA AUTÔNOMO DE DETECÇÃO E COMBATE A INCÊNDIO

FUNCIONAMENTO:
1. DHT22 e sensor MQ detectam condições de risco
2. Servo realiza varredura com LDR
3. Sistema encontra o ângulo com maior intensidade luminosa
4. Ultrassônico mede distância até o foco
5. Stepper ajusta pressão/alcance do sistema de defesa
"""

led_red = Pin(16, Pin.OUT)
buzzer = Speaker(17)
servo_motor = Servo(pin=1)
stepper_dir = Pin(21, Pin.OUT)
stepper_step = Pin(22, Pin.OUT)
ultrassonic = HCSR04(trigger_pin=20, echo_pin=19, echo_timeout_us=30000)

led_red.off()
buzzer.off()
stepper_dir.value(1)

sensor_dht = DHT22(Pin(18))
sensor_gas = ADC(26)
sensor_ldr = ADC(27)

angulo = 0
melhor_angulo = 0
maior_luz = 0
posicao_stepper = 0

tempo_sensores = ticks_ms()
tempo_servo = ticks_ms()

incendio_detectado = False

def limitador(valor, minimo, maximo):
    if valor < minimo:
        return minimo
    if valor > maximo:
        return maximo
    return valor


#Converte distância do fogo em RPM proporcional
def valor_rpm_por_distancia(d_cm, d_min=20, d_max=400, rpm_min=20, rpm_max=60):
    d_cm = limitador(d_cm, d_min, d_max)

    u = (d_cm - d_min) / (d_max - d_min)

    rpm = rpm_min + u * (rpm_max - rpm_min)

    return rpm


#Calcula frequência de pulsos do stepper
def freq_stepper(d_cm, passos_por_volta=200, microstep=16):
    rpm = valor_rpm_por_distancia(d_cm)

    freq_step = (rpm * passos_por_volta * microstep) / 60

    return freq_step


#Converte frequência em intervalo de pulsos
def intervalo_pulsos(d_cm):
    freq = freq_stepper(d_cm)

    intervalo = 1 / freq

    return intervalo

#Define quantos passos o stepper deve mover
def passos_por_distancia(d_cm, d_min=20, d_max=400, passos_min=50, passos_max=400):
    d_cm = limitador(d_cm, d_min, d_max)

    u = (d_cm - d_min) / (d_max - d_min)

    passos = passos_min + u * (passos_max - passos_min)

    return int(passos)


#Move o stepper até a posição desejada
def girar_stepper(step_pin, dir_pin, distancia_cm):
    global posicao_stepper

    freq = freq_stepper(distancia_cm)

    intervalo = intervalo_pulsos(distancia_cm)

    intervalo_us = int(intervalo * 1000000)

    destino = passos_por_distancia(distancia_cm)

    diferenca = destino - posicao_stepper

    if diferenca >= 0:
        dir_pin.value(1)
    else:
        dir_pin.value(0)

    passos = abs(diferenca)

    print(f"RPM DO STEPPER: {valor_rpm_por_distancia(distancia_cm)}")
    print(f"FREQUÊNCIA: {freq}")
    print(f"INTERVALO: {intervalo_us} us")
    print(f"PASSOS: {passos}")

    for i in range(passos):
        step_pin.value(1)

        sleep_us(intervalo_us // 2)

        step_pin.value(0)

        sleep_us(intervalo_us // 2)

    posicao_stepper = destino

while True:
    agora = ticks_ms()

    if ticks_diff(agora, tempo_sensores) >= 1000:
        tempo_sensores = agora
        sensor_dht.measure()
        temp = sensor_dht.temperature()
        umid = sensor_dht.humidity()
        gas = sensor_gas.read_u16()

        print(f"Temperatura: {temp}°C")
        print(f"Umidade: {umid}%")
        print(f"Nível de gás/fumaça: {gas}\n")

        if umid <= 30 and temp >= 40 and gas >= 55949 and incendio_detectado == False:

            incendio_detectado = True

            angulo = 0
            melhor_angulo = 0
            maior_luz = 0
            led_red.on()
            buzzer.on()

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

                    print('Distância do fogo: {:.2f} cm'.format(distancia_cm))

                    print("SISTEMA DE DEFESA ATIVADO")

                    girar_stepper(stepper_step, stepper_dir, distancia_cm)

                incendio_detectado = False

                angulo = 0
                melhor_angulo = 0
                maior_luz = 0

    sleep_ms(5)