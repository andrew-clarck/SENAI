from machine import Pin
from utime import ticks_ms, ticks_diff, sleep_ms

ledGreen = Pin(18, Pin.OUT)
ledYellow = Pin(19, Pin.OUT)
ledRed = Pin(20, Pin.OUT)

button1 = Pin(16, Pin.IN) # PULL-DOWN
button2 = Pin(17, Pin.IN) # PULL-UP

ledGreen.value(0)
ledYellow.value(0)
ledRed.value(0)

carga = 0 # 0 a 100

ultimo_estado1 = 0 # DOWN
ultimo_estado2 = 1 # UP

estado = "parado"

tempo = ticks_ms()

while True:
    agora = ticks_ms()
    
    leitura_botao1 = button1.value()
    leitura_botao2 = button2.value()
    
    if leitura_botao1 == 1 and ultimo_estado1 == 0:
        if estado == "parado" or estado == "descarregando":
            estado = "carregando"
            print("Carregador Conectado!")
        elif estado == "carregando":
            estado = "parado"
            print("Carregador Desconectado!")
        
    ultimo_estado1 = leitura_botao1
    
    if leitura_botao2 == 0 and ultimo_estado2 == 1:
        if estado == "parado" or estado == "carregando":
            estado = "descarregando"
            print("Motor Ligado - Consumindo Bateria")
        elif estado == "descarregando":
            estado = "parado"
            print("Motor Desligado")
    
    ultimo_estado2 = leitura_botao2
        
    if estado == "carregando":
        # Uso de ticks para total responsividade do botão
        if ticks_diff(agora, tempo) > 500:
            carga += 5
            
            if carga < 20:
                ledYellow.value(0)
                ledRed.value(1)
            elif carga >= 20 and carga < 80:
                ledGreen.value(0)
                ledRed.value(0)
                ledYellow.value(1)
            elif carga >= 80 and carga <= 100:
                ledYellow.value(0)
                ledGreen.value(1)
            elif carga > 100:
                carga = 100
                ledGreen.value(1)
            
            print(f"Nível da Bateria: {carga}%")
            tempo = agora
        
    if estado == "descarregando":
        if ticks_diff(agora, tempo) > 500:
            carga -= 5
            
            if carga < 0:
                carga = 0
                ledRed.value(1)
            elif carga >= 0 and carga < 20:
                ledYellow.value(0)
                ledRed.value(1)
            elif carga >= 20 and carga < 80:
                ledGreen.value(0)
                ledRed.value(0)
                ledYellow.value(1)
            elif carga >= 80 and carga <= 100:
                ledYellow.value(0)
                ledGreen.value(1)
            
            print(f"Nível da Bateria: {carga}%")
            tempo = agora
            
    # Pequena pausa para estabilidade
    sleep_ms(5)