from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(18))
botao_acrescimo = Pin(16, Pin.IN, Pin.PULL_UP)
botao_decrescimo = Pin(17, Pin.IN, Pin.PULL_UP)

led.freq(1000)

ultimo_estado1 = 1
ultimo_estado2 = 1

porcentagem = 0  # Controle do led em porcentagem

def porcentagem_em_pwm(valor):
    return int((valor * 65535) / 100)

while True:
    estado1 = botao_acrescimo.value()
    estado2 = botao_decrescimo.value()

    # Aumenta
    if estado1 == 0 and ultimo_estado1 == 1:
        porcentagem += 10
        if porcentagem > 100:
            porcentagem = 100

        led.duty_u16(porcentagem_em_pwm(porcentagem))
        print(f"Brilho: {porcentagem}%")
        sleep(0.2)

    ultimo_estado1 = estado1

    # Diminui
    if estado2 == 0 and ultimo_estado2 == 1:
        porcentagem -= 10
        if porcentagem < 0:
            porcentagem = 0

        led.duty_u16(porcentagem_em_pwm(porcentagem))
        print(f"Brilho: {porcentagem}%")
        sleep(0.2)

    ultimo_estado2 = estado2
    sleep(0.05)