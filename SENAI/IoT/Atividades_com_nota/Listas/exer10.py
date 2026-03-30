# Programa com Potenciômetro, Botão e Led RGB

from machine import Pin, PWM, ADC
from utime import sleep

ledRed = PWM(Pin(19))
ledBlue = PWM(Pin(17))
ledGreen = PWM(Pin(18))

button1 = Pin(16, Pin.IN, Pin.PULL_UP)
button2 = Pin(20, Pin.IN, Pin.PULL_UP)

potenciometro = ADC(28)

ledRed.freq(1000)
ledBlue.freq(1000)
ledGreen.freq(1000)

leds = [ledRed, ledGreen, ledBlue]

indice = 0
ultimo_estado1 = 1 # 1 porque o botão é pull-up (desligado), se não, seria 0

modo = 0
ultimo_estado2 = 1

while True:
    
    estado1 = button1.value()
    estado2 = button2.value()
    valor = potenciometro.read_u16()


    # Apaga todos os LEDs
    for led in leds:
        led.duty_u16(0)

    if modo == 0:
        # Luz Fixa
        leds[indice].duty_u16(valor)
        sleep(0.02)
        # Detecta clique do botão (1 → 0)
        if estado1 == 0 and ultimo_estado1 == 1:
            indice = (indice + 1) % 3 # Muda o índice, o % 3 é o resto da divisão, desse jeito, quando indice + 1 for 3, o indice volta para 0, logo, o vermelho
            sleep(0.2)

        ultimo_estado1 = estado1
    elif modo == 1:
        # Luz piscando
        # Detecta clique do botão (1 → 0)
        if estado1 == 0 and ultimo_estado1 == 1:
            indice = (indice + 1) % 3
            sleep(0.2)
    
        ultimo_estado1 = estado1
        leds[indice].duty_u16(65535)
        sleep(1)
        leds[indice].duty_u16(0)
        sleep(1)
    else:
        # Respiração
        for i in range(0, 65535, 5000):
            # Detecta clique do botão (1 → 0)
            if estado1 == 0 and ultimo_estado1 == 1:
                indice = (indice + 1) % 3 # Muda o índice, o % 3 é o resto da divisão, desse jeito, quando indice + 1 for 3, o indice volta para 0, logo, o vermelho
                sleep(0.2)
            
            ultimo_estado1 = estado1
            leds[indice].duty_u16(i)
            sleep(0.02)
        for i in range(65535, 0, -5000):
            # Detecta clique do botão (1 → 0)
            if estado1 == 0 and ultimo_estado1 == 1:
                indice = (indice + 1) % 3 # Muda o índice, o % 3 é o resto da divisão, desse jeito, quando indice + 1 for 3, o indice volta para 0, logo, o vermelho
                sleep(0.2)
            
            ultimo_estado1 = estado1
            leds[indice].duty_u16(i)
            sleep(0.02)
    
    if estado2 == 0 and ultimo_estado2 == 1:
        modo = (modo + 1) % 3
        sleep(0.2)
        
    ultimo_estado2 = estado2