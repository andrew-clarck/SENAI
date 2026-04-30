from machine import ADC, Pin
from time import sleep

# Configura o pino ADC (A0 do sensor está no GP27 do Pico)
sensor_luz = ADC(26)
led_branco = Pin(14, Pin.OUT)
led_branco.value(1) # Led para testar a luz no Resistor

while True:
    valor_adc = sensor_luz.read_u16()  # Lê de 0 a 65535
    valor_0_255 = int((valor_adc / 65535) * 255)  # Converte para escala de 0 a 255
    lux_aproximado = (valor_adc / 65535) * 1000   # Conversão proporcional para lux
    tensao = (valor_adc / 65535) * 3.3            # Conversão simples para tensão
    
    print(f"ADC: {valor_adc}  | Lux aprox: {lux_aproximado:.2f} |")
    print(f"Escala 0-255: {valor_0_255}  |  Tensão: {tensao:.2f} V ") 

    print("")
    sleep(1)
