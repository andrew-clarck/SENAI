from machine import Pin
from utime import sleep, sleep_ms

led_pico = Pin("LED", Pin.OUT)

while True:
    led_pico.toggle()
    sleep_ms(500)
    # OU
    # led_pico.value(1)
    # sleep_ms(500)
    # led_pico.value(0)
    # sleep_ms(500)
