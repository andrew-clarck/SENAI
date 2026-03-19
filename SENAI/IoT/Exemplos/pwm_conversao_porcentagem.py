# Conversão PWM em porcentagem
from machine import Pin, PWM, ADC
from utime import sleep

potenciometro = ADC(28)
ledBlue = PWM(Pin(16))
ledRed = Pin(17, Pin.OUT)

ledBlue.freq(1000)

while True:
    valor_pot = potenciometro.read_u16()
    porcentagem = int(valor_pot / 65535 * 100) 

    print(f"O valor em porcentagem é de: {porcentagem}%") # Exibição do PWM em porcentagem
    
    if porcentagem <= 50:
        ledRed.value(0)
        ledBlue.duty_u16(valor_pot)
        sleep(0.5)
    else:
        ledBlue.duty_u16(0)
        ledRed.value(1)
        sleep(0.5)