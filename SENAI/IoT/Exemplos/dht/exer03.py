from machine import Pin
from utime import ticks_ms, ticks_diff, sleep_ms
from dht import DHT22

sensor = DHT22(Pin(14))
button = Pin(16, Pin.IN)

ultima_temp = None
ultima_umid = None

ultimo_estado = 1
modo = 0

tempo = ticks_ms()

while True:
    agora = ticks_ms()
    estado = button.value()
    
    if estado == 0 and ultimo_estado == 1:
        if modo == 0:
            modo = 1
        else:
            modo = 0
    
    ultimo_estado = estado
    
    # Temp
    if modo == 0:
    # Tempo de espera de 2 segundos para o sensor - Detecta mudanças a cada 2 segundos
        if ticks_diff(agora, tempo) > 2000:
            sensor.measure()
        
            temp = round(sensor.temperature(), 1)
        
            if temp != ultima_temp:
                print(f"Temperatura: {temp}ºC")
                ultima_temp = temp
                
            tempo = agora
    
    elif modo == 1:
        if ticks_diff(agora, tempo) > 2000:
            sensor.measure()
    
            umid = round(sensor.humidity(), 1)
        
            if umid != ultima_umid:
                print(f"Umidade: {umid}%")
                ultima_umid = umid
                
            tempo = agora
    
    sleep_ms(5)
