from machine import Pin, PWM
from utime import sleep, sleep_ms

button_down = Pin(20, Pin.IN)
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
    led.freq(10)
    
"""    
# PWM - PULL_DOWN
while True:
    estado_botao = button_down.value()
    
    if estado_botao == 0:
        print("0 - BOTÃO SOLTO!")
        for led in leds:
            led.duty_u16(65535)
            sleep(0.5)
            led.duty_u16(0)
        
    else:
        print("1 - BOTÃO PRESSIONADO!!!")
        for led in leds:
            for i in range(0, 65535, 1000):
                led.duty_u16(i)
                sleep(0.01)
        
        for led in leds:
            for i in range(65535, 0, -1000):
                led.duty_u16(i)
                sleep(0.01)
"""
# PWM - PULL_UP
while True:
    estado_botao = button_down.value()
    
    if estado_botao == 1:
        print("1 - BOTÃO SOLTO!") #INVERTE
        for led in leds:
            for i in range(0, 65535, 1000):
                led.duty_u16(i)
                sleep(0.01)
        
        for led in leds:
            for i in range(65535, 0, -1000):
                led.duty_u16(i)
                sleep(0.01)
        
        
        
    else:
        print("0 - BOTÃO PRESSIONADO!!!")
        for led in leds:
            led.duty_u16(65535)
            sleep(0.5)
            led.duty_u16(0)