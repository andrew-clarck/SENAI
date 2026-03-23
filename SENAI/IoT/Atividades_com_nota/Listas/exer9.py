from machine import Pin, PWM, ADC
from utime import sleep

ledBlue = PWM(Pin(17))
ledRed = PWM(Pin(19))

button = Pin(16, Pin.IN)
pot = ADC(28)

ledBlue.freq(1000)
ledRed.freq(1000)

while True:
    valor = pot.read_u16()
    
    ledBlue.duty_u16(valor)
    ledRed.duty_u16(65535 - valor)
    sleep(0.05)


