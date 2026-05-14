# wifi_connect.py — Aula 9: MQTT com Raspberry Pi Pico 2W
# Responsável pela conexão WiFi — reutilizável em qualquer projeto

import network
from utime import sleep

def conectar_wifi(ssid, senha, timeout=15):
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

    # Evita reconectar se já estiver conectado
    if wlan.isconnected():
        print(f"[WiFi] Já conectado. IP: {wlan.ifconfig()[0]}")
        return True

    print(f"[WiFi] Conectando em '{ssid}'", end="")
    wlan.connect(ssid, senha)

    # Aguarda conexão — timeout evita travar para sempre se a rede estiver fora
    while not wlan.isconnected() and timeout > 0:
        sleep(1)
        timeout -= 1
        print(".", end="")

    print()  # quebra de linha após os pontos

    if wlan.isconnected():
        ip, _, gateway, _ = wlan.ifconfig()
        print(f"[WiFi] Conectado! IP do Pico: {ip}")
        return True
    else:
        print("[WiFi] ERRO: não conectou. Verifique SSID e senha.")
        return False