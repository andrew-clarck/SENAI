"""
# FORMA "ERRADA"

from machine import Pin, PWM, ADC
from utime import sleep

# Configuração dos LEDs RGB com PWM
ledRed = PWM(Pin(19))
ledBlue = PWM(Pin(17))
ledGreen = PWM(Pin(18))

# Botões com pull-up
button1 = Pin(16, Pin.IN)
button2 = Pin(20, Pin.IN)

# Potenciômetro no ADC
potenciometro = ADC(28)

# Frequência PWM
ledRed.freq(1000)
ledBlue.freq(1000)
ledGreen.freq(1000)

# Lista de LEDs
leds = [ledRed, ledGreen, ledBlue]

indice = 0  # qual cor está ativa
ultimo_estado1 = 1  # usado para detectar clique

modo = 0  # modo atual (0, 1 ou 2)
ultimo_estado2 = 1

while True:
    
    # Leitura dos botões (OK aqui)
    estado1 = button1.value()
    estado2 = button2.value()

    # Leitura do potenciômetro
    valor = potenciometro.read_u16()

    # Apaga todos os LEDs
    for led in leds:
        led.duty_u16(0)

    # =========================
    # MODO 0 - LUZ FIXA
    # =========================
    if modo == 0:
        leds[indice].duty_u16(valor)

        sleep(0.02)  # ❌ PEQUENO BLOQUEIO (não grave, mas desnecessário)

        # Detecta clique
        if estado1 == 0 and ultimo_estado1 == 1:
            indice = (indice + 1) % 3
            sleep(0.2)  # ❌ BLOQUEIA leitura do botão

        ultimo_estado1 = estado1

    # =========================
    # MODO 1 - PISCANDO
    # =========================
    elif modo == 1:

        # Detecta clique
        if estado1 == 0 and ultimo_estado1 == 1:
            indice = (indice + 1) % 3
            sleep(0.2)  # ❌ trava o sistema

        ultimo_estado1 = estado1

        leds[indice].duty_u16(65535)
        sleep(1)  # ❌ PROBLEMA GRAVE: fica 1 segundo sem ler botão

        leds[indice].duty_u16(0)
        sleep(1)  # ❌ outro segundo travado

        # 👉 Resultado:
        # Se você clicar durante esses sleeps → o clique é perdido

    # =========================
    # MODO 2 - RESPIRAÇÃO
    # =========================
    else:

        # Crescendo
        for i in range(0, 65535, 5000):

            # ❌ ERRO GRAVE:
            # estado1 NÃO é atualizado aqui dentro
            # então o botão praticamente não funciona
            if estado1 == 0 and ultimo_estado1 == 1:
                indice = (indice + 1) % 3
                sleep(0.2)

            ultimo_estado1 = estado1

            leds[indice].duty_u16(i)
            sleep(0.02)  # ❌ loop bloqueante

        # Diminuindo
        for i in range(65535, 0, -5000):

            # ❌ mesmo erro aqui
            if estado1 == 0 and ultimo_estado1 == 1:
                indice = (indice + 1) % 3
                sleep(0.2)

            ultimo_estado1 = estado1

            leds[indice].duty_u16(i)
            sleep(0.02)

        # 👉 Resultado:
        # - Botão quase não responde
        # - Sistema "preso" dentro do for

    # Troca de modo
    if estado2 == 0 and ultimo_estado2 == 1:
        modo = (modo + 1) % 3
        sleep(0.2)  # ❌ bloqueio

    ultimo_estado2 = estado2
"""

# FORMA MAIS CORRETA

from machine import Pin, PWM, ADC
from utime import ticks_ms, ticks_diff, sleep

# LEDs RGB
ledRed = PWM(Pin(19))
ledBlue = PWM(Pin(17))
ledGreen = PWM(Pin(18))

# Botões (pull-up)
button1 = Pin(16, Pin.IN, Pin.PULL_UP)
button2 = Pin(20, Pin.IN, Pin.PULL_UP)

# Potenciômetro
potenciometro = ADC(28)

# Frequência PWM
for led in [ledRed, ledBlue, ledGreen]:
    led.freq(1000)

leds = [ledRed, ledGreen, ledBlue]

indice = 0
modo = 0

ultimo_estado1 = 1
ultimo_estado2 = 1

# Controle de tempo (ESSENCIAL)
tempo_pisca = ticks_ms()
tempo_respira = ticks_ms()

estado_led = False

# Controle da respiração
brilho = 0
direcao = 1

while True:

    agora = ticks_ms()  # tempo atual (não trava nada)

    # Leitura constante dos botões (RODA SEMPRE)
    estado1 = button1.value()
    estado2 = button2.value()

    valor = potenciometro.read_u16()

    # =========================
    # BOTÃO 1 - TROCA COR
    # =========================
    if estado1 == 0 and ultimo_estado1 == 1:
        indice = (indice + 1) % 3

    ultimo_estado1 = estado1

    # =========================
    # BOTÃO 2 - TROCA MODO
    # =========================
    if estado2 == 0 and ultimo_estado2 == 1:
        modo = (modo + 1) % 3

    ultimo_estado2 = estado2

    # Apaga LEDs
    for led in leds:
        led.duty_u16(0)

    # =========================
    # MODO 0 - FIXO
    # =========================
    if modo == 0:
        leds[indice].duty_u16(valor)

    # =========================
    # MODO 1 - PISCANDO
    # =========================
    elif modo == 1:

        # 👉 NÃO trava
        # Apenas verifica se passou tempo
        if ticks_diff(agora, tempo_pisca) > 500:
            estado_led = not estado_led
            tempo_pisca = agora

        if estado_led:
            leds[indice].duty_u16(65535)

    # =========================
    # MODO 2 - RESPIRAÇÃO
    # =========================
    else:

        # Atualiza aos poucos (sem loop travado)
        if ticks_diff(agora, tempo_respira) > 30:

            brilho += direcao * 2000

            # Inverte direção
            if brilho >= 65535:
                brilho = 65535
                direcao = -1
            elif brilho <= 0:
                brilho = 0
                direcao = 1

            tempo_respira = agora

        leds[indice].duty_u16(brilho)

    # Pequena pausa para estabilidade
    sleep(0.005)