from machine import Pin, PWM, ADC
from utime import sleep

led = PWM(Pin(17))
pot = ADC(28)

led.freq(1000)

while True:
    valor = pot.read_u16()
    
    led.duty_u16(valor)
    sleep(0.05)
