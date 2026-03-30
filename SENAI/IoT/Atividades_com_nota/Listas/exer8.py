from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(17))
button = Pin(16, Pin.IN, Pin.PULL_UP)

led.freq(1000)

ultimo_estado = 1
porcentagem = 0
ligado = False  # Controla o estado do interruptor

def porcentagem_em_pwm(valor):
    return int((valor * 65535) / 100)

while True:
    estado = button.value()

    # Detecta clique
    if estado == 0 and ultimo_estado == 1:
        ligado = not ligado  # Alterna o estado de ligado ou desligado

        if ligado:
            for i in range(0, 101, 5):
                porcentagem = i
                led.duty_u16(porcentagem_em_pwm(porcentagem))
                print(f"Brilho: {porcentagem}%")
                sleep(0.1)

        else:
            for i in range(100, -1, -5):
                porcentagem = i
                led.duty_u16(porcentagem_em_pwm(porcentagem))
                print(f"Brilho: {porcentagem}%")
                sleep(0.1)

    ultimo_estado = estado
    sleep(0.05)