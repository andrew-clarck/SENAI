from machine import Pin, PWM, ADC
from utime import sleep

led = Pin(17, Pin.OUT)
pot = ADC(28)


while True:
    valor = pot.read_u16()
    valor_convertido = int(valor / 65535 * 10) # Máximo de 10 segundos
    
    print(f"A pausa será de {valor_convertido} segundos.")
    led.value(1)
    sleep(valor_convertido)
    led.value(0)
    sleep(valor_convertido)

    sleep(0.5)