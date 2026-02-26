from machine import Pin, PWM
from utime import sleep

led_blue = PWM(Pin(16, Pin.OUT))
led_blue.freq(1000)

while True:
    #LED irá "piscar suavemente" com efeito fade in/out.
    for i in range(0, 65536, 1000):
        led_blue.duty_u16(i)   # Aumenta o brilho
        sleep(0.02)
    for i in range(65535, 0, -1000):
        led_blue.duty_u16(i)   # Diminui o brilho
        sleep(0.02)