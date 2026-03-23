from machine import Pin, PWM, ADC
from utime import sleep

ledBlue = PWM(Pin(17))
ledGreen = PWM(Pin(18))
ledRed = PWM(Pin(19))

button = Pin(16, Pin.IN)
pot = ADC(28)

ledBlue.freq(1000)
ledGreen.freq(1000)
ledRed.freq(1000)

while True:
    valor = pot.read_u16()
    
    ledGreen.duty_u16(0)
    ledBlue.duty_u16(0)
    ledRed.duty_u16(valor)
    sleep(0.05)

