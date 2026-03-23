from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(17))
button = Pin(16, Pin.IN)

led.freq(1000)

while True:
    estado = button.value()
    
    if estado == 0: #pressionado
        for i in range(0, 65535, 5000):
            led.duty_u16(i)
            sleep(0.1)
        for i in range(65535, 0, -5000):
            led.duty_u16(i)
            sleep(0.1)
    else:
        led.duty_u16(0)
