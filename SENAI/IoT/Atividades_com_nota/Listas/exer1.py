from machine import Pin
from utime import sleep

led = Pin(17, Pin.OUT)
button = Pin(16, Pin.IN)

while True:
    estado = button.value()
    
    if estado == 0: #pressionado
        led.value(1)
    else:
        led.value(0)