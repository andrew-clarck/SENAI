from machine import Pin
from utime import ticks_ms, ticks_diff, sleep_ms
from dht import DHT22

sensor = DHT22(Pin(14))

ultima_temp = None
ultima_umid = None

tempo = ticks_ms()

while True:
    agora = ticks_ms()
    
    # Tempo de espera de 2 segundos para o sensor - Detecta mudanças a cada 2 segundos
    if ticks_diff(agora, tempo) > 2000:
        sensor.measure()
    
        temp = round(sensor.temperature(), 1)
        umid = round(sensor.humidity(), 1)
    
        if temp != ultima_temp or umid != ultima_umid:
            print(f"Temperatura: {temp}ºC")
            print(f"Umidade: {umid}%")
            
            ultima_temp = temp
            ultima_umid = umid
            
        tempo = agora
        
    sleep_ms(5)