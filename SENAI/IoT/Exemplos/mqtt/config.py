# config.py — MODO A: Broker HiveMQ (nuvem)
# Aula 9: MQTT com Raspberry Pi Pico 2W | SENAI Ítalo Bologna
#
# ⚠️ Cada aluno muda:
#   CLIENT_ID  → pico_seunome  (ex: pico_joao)
#   TOPIC_PUB  → senai/seunome/dht22  (ex: senai/joao/dht22)

WIFI_SSID   = "IoT"
WIFI_PASS   = "senai1234"

BROKER_IP   = "broker.hivemq.com"   # broker público na nuvem
BROKER_PORT = 1883

CLIENT_ID   = "pico_seunome"        # ← coloque seu nome aqui
TOPIC_PUB   = "senai/seunome/dht22" # ← coloque seu nome aqui