from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(16))
led.freq(1000)

# Função para converter o valor PWM (0 a 65535) para 0 a 255 (como o do RGB)
def funcao_map(leitura, in_min, in_max, out_min, out_max):
    return int((leitura - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

pot_leitura = 32767 # Valor PWM que será convertido em 0 a 255

rgb = funcao_map(pot_leitura, 0, 65535, 0, 255)

print("Conversão RGB (0 a 255): ", rgb)