# Programa com Potenciômetro, Botão e Led RGB

from machine import Pin, PWM, ADC
from utime import sleep

ledRed = PWM(Pin(17))
ledBlue = PWM(Pin(16))
ledGreen = PWM(Pin(19))

button = Pin(18, Pin.IN, Pin.PULL_UP)
potenciometro = ADC(28)

ledRed.freq(1000)
ledBlue.freq(1000)
ledGreen.freq(1000)

leds = [ledRed, ledGreen, ledBlue]

indice = 0
ultimo_estado = 1 # 1 porque o botão é pull-up (desligado), se não, seria 0

while True:
    
    estado = button.value()
    valor_pot = potenciometro.read_u16()

    """
    # Apaga todos os LEDs
    for led in leds:
        led.duty_u16(0)
    """

    # Liga apenas o LED selecionado
    leds[indice].duty_u16(valor_pot)

    # Detecta clique do botão (1 → 0)
    if estado == 0 and ultimo_estado == 1:
        indice = (indice + 1) % 3 # Muda o índice, o % 3 é o resto da divisão, desse jeito, quando indice + 1 for 3, o indice volta para 0, logo, o vermelho
        sleep(0.2)

    ultimo_estado = estado

    sleep(0.05)