from machine import Pin, PWM, ADC
from utime import sleep

led = PWM(Pin(17))
button = Pin(16, Pin.IN)

led.freq(1000)


liga_desliga = 0
ultimo_estado = 1 # Pull-up

while True:
    estado = button.value()
    
    def porcentagem_pwm(valor):
        return int((valor * 65535 / 100)) # Converte a porcentagem para pwm
    
    
    if liga_desliga == 0:
        for i in range(100, -5, -5):
            porcentagem = porcentagem_pwm(i)
            led.duty_u16(porcentagem)
            print(f"O Led está {i}% ligado")
            sleep(0.1)
    else:
        for i in range(0, 105, 5):
            porcentagem = porcentagem_pwm(i)
            led.duty_u16(porcentagem)
            print(f"O Led está {i}% ligado")
            sleep(0.1)
        
            
    if estado == 0 and ultimo_estado == 1:
        liga_desliga = (liga_desliga + 1) % 2
        sleep(0.2)
        
    ultimo_estado = estado