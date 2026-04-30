from machine import ADC, Pin, PWM
from time import sleep

# Configura o pino ADC (A0 do sensor está no GP27 do Pico)
sensor_luz = ADC(26)

led_branco = Pin(14, Pin.OUT) # Led para testar a luz no Resistor - Conectado com cabos femea-macho para movimentar
led_vermelho = PWM(Pin(16))

led_vermelho.freq(1000)
led_branco.value(1)

while True:
    valor_adc = sensor_luz.read_u16()  # Lê de 0 a 65535
    valor_0_255 = int((valor_adc / 65535) * 255)  # Converte para escala de 0 a 255
    lux_aproximado = (valor_adc / 65535) * 1000   # Conversão proporcional para lux
    tensao = (valor_adc / 65535) * 3.3            # Conversão simples para tensão
    
    luz_led_vermelho = 65535 - valor_adc # Quanto mais escuro, mais aceso deve ficar
    led_vermelho.duty_u16(luz_led_vermelho)
    
    print(f"ADC: {valor_adc}  | Lux aprox: {lux_aproximado:.2f} |")
    print(f"Escala 0-255: {valor_0_255}  |  Tensão: {tensao:.2f} V ") 
    print(f"Luz do Led: {luz_led_vermelho}")
    
    print("")
    sleep(1)

