from machine import Pin, PWM
from utime import sleep

"""
# VERSÃO PADRÃO
ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

while True:
    ledVerde.value(1)
    sleep(3)
    ledVerde.value(0)
    
    ledAmarelo.value(1)
    sleep(1)
    ledAmarelo.value(0)
    
    ledVermelho.value(1)
    sleep(2)
    ledVermelho.value(0)
    
    sleep(1)
"""
"""
#Laço FOR

ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

leds = [ledVerde, ledAmarelo, ledVermelho]

while True:
    for led in leds:
        led.value(1)
        sleep(2)
        led.value(0)
        sleep(1)
"""
#"""
#VERSÃO ENXUTA
leds = [Pin(18, Pin.OUT), Pin(17, Pin.OUT), Pin(16, Pin.OUT)]

ordem = [(leds[0], 3), (leds[1], 1), (leds[2], 2)]

while True:
    for led, tempo in ordem:
        led.value(1)
        sleep(tempo)
        led.value(0)
        
#"""
"""
#VERSÃO PWM

ledVermelho = PWM(Pin(16, Pin.OUT))
ledAmarelo = PWM(Pin(17, Pin.OUT))
ledVerde = PWM(Pin(18, Pin.OUT))

ledVermelho.freq(1000)
ledAmarelo.freq(1000)
ledVerde.freq(1000)

while True:
    for i in range(0, 65536, 1000):
        ledVerde.duty_u16(i)
        sleep(0.02)
    for i in range(65535, 0, -1000):
        ledVerde.duty_u16(i)   # Diminui o brilho
        sleep(0.02)
    
    for i in range(0, 65536, 1000):
        ledAmarelo.duty_u16(i)
        sleep(0.005)
    for i in range(65535, 0, -1000):
        ledAmarelo.duty_u16(i)   # Diminui o brilho
        sleep(0.005)
    
    
    for i in range(0, 65536, 1000):
        ledVermelho.duty_u16(i)
        sleep(0.015)
    for i in range(65535, 0, -1000):
        ledVermelho.duty_u16(i)   # Diminui o brilho
        sleep(0.015)
    
    
    sleep(1)
"""