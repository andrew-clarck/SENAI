from machine import Pin, PWM
from utime import sleep, sleep_ms

"""
# SEM PWM
rgb_blue = Pin(16, Pin.OUT)
rgb_green = Pin(17, Pin.OUT)
rgb_red = Pin(18, Pin.OUT)
"""

#PWM
rgb_blue = PWM(Pin(16, Pin.OUT))
rgb_green = PWM(Pin(17, Pin.OUT))
rgb_red = PWM(Pin(18, Pin.OUT))

leds = [rgb_blue, rgb_red, rgb_green]


for led in leds:
    led.freq(10000)
    
"""
while True:
    for led in leds:
        led.toggle()
        sleep(0.5)
"""

# PWM
while True:
    for led in leds:
        for i in range(0, 65535, 500):
            led.duty_u16(i)
            sleep(0.01)
        
    for led in leds:
        for i in range(65535, 0, -500):
            led.duty_u16(i)
            sleep(0.01)

"""
# TESTANDO MUITAS CORES - CÓDIGO ENORME
while True:
    rgb_red.value(1)
    rgb_green.value(1)
    rgb_blue.value(1)
    sleep_ms(500)
    rgb_red.value(1)
    rgb_green.value(0)
    rgb_blue.value(0)
    sleep_ms(500)
    rgb_red.value(0)
    rgb_green.value(1)
    rgb_blue.value(0)
    sleep_ms(500)
    rgb_red.value(0)
    rgb_green.value(0)
    rgb_blue.value(1)
    sleep_ms(500)
    rgb_red.value(1)
    rgb_green.value(1)
    rgb_blue.value(0)
    sleep_ms(500)
    rgb_red.value(1)
    rgb_green.value(0)
    rgb_blue.value(1)
    sleep_ms(500)
    rgb_red.value(0)
    rgb_green.value(1)
    rgb_blue.value(1)
    sleep_ms(500)
"""