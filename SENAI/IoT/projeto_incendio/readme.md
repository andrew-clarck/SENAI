# Sistema Autônomo de Detecção e Combate a Incêndio

## Visão Geral

Este projeto consiste em um sistema autônomo de detecção e combate a incêndio utilizando microcontrolador e sensores embarcados.

O sistema é capaz de:

- Monitorar temperatura, umidade e fumaça
- Detectar situações de risco de incêndio
- Realizar uma varredura automática do ambiente
- Localizar o foco de fogo utilizando luminosidade
- Medir a distância do foco
- Ajustar automaticamente a atuação do sistema de combate
- Controlar dinamicamente um motor de passo com base na distância detectada

O projeto foi desenvolvido com foco acadêmico e prototipagem de sistemas embarcados e IoT.

---

# Objetivo do Projeto

O objetivo é criar um sistema inteligente capaz de:

1. Detectar condições favoráveis ao incêndio
2. Confirmar a existência de um possível foco
3. Localizar o foco automaticamente
4. Direcionar o sistema de defesa
5. Ajustar a intensidade/alcance do combate de forma automática

---

# Componentes Utilizados

## Microcontrolador

- Raspberry Pi Pico

Responsável por controlar todo o sistema.

---

# Sensores

## Sensor de Temperatura e Umidade

- DHT22

Funções:

- Medir temperatura do ambiente
- Medir umidade relativa do ar

Usado para identificar:

- altas temperaturas
- baixa umidade
- condições favoráveis ao incêndio

---

## Sensor de Gás/Fumaça

- MQ-2 Gas Sensor Module

Funções:

- Detectar fumaça e gases combustíveis

Usado como:

- sensor principal de fumaça

---

## Sensor de Luminosidade

- LDR Photoresistor Module

Funções:

- Detectar intensidade luminosa

Usado para:

- localizar o foco do fogo durante a varredura

O fogo emite luz intensa, permitindo que o sistema encontre o ângulo com maior concentração luminosa.

---

## Sensor Ultrassônico

- HC-SR04

Funções:

- Medir a distância até o foco detectado

Usado para:

- calcular a intensidade necessária do sistema de combate

---

# Atuadores

## Servo Motor

- SG90

Funções:

- movimentar o sensor LDR
- realizar a varredura do ambiente

O servo gira de:

- 0°
  até
- 180°

Durante a varredura, o sistema registra:

- o ângulo com maior intensidade luminosa

---

## Motor de Passo

- 28BYJ-48

Controlado por:

- ULN2003 Driver Stepper Motor

Funções:

- ajustar dinamicamente a atuação do sistema de combate

No protótipo:

- representa o controle da pressão ou alcance do jato de água

---

## LED Vermelho

Funções:

- alerta visual de incêndio

---

## Buzzer

Funções:

- alerta sonoro

---

# Funcionamento Geral do Sistema

## Etapa 1 — Monitoramento

O sistema realiza leituras contínuas de:

- temperatura
- umidade
- fumaça/gás

---

## Etapa 2 — Detecção de Risco

O sistema considera risco de incêndio quando:

```text
Umidade <= 30%
Temperatura >= 40°C
Gás/Fumaça >= limite definido
```

Quando essas condições são atendidas:

- o LED é ativado
- o buzzer é ativado
- inicia-se a varredura

---

## Etapa 3 — Varredura do Ambiente

O servo motor movimenta o sensor LDR de:

```text
0° → 180°
```

Durante o movimento:

- o sistema mede a intensidade luminosa
- salva o ângulo com maior luminosidade

Esse ângulo é considerado:

- o provável foco do incêndio

---

## Etapa 4 — Posicionamento

Após a varredura:

- o servo retorna automaticamente ao melhor ângulo encontrado

---

## Etapa 5 — Medição da Distância

O sensor ultrassônico mede:

- a distância entre o sistema e o foco

---

## Etapa 6 — Controle Inteligente do Stepper

A distância detectada é utilizada para calcular:

- RPM do stepper
- frequência de pulsos
- intervalo entre pulsos
- posição ideal do motor

Quanto maior a distância:

- maior a atuação do stepper

Isso simula:

- aumento da pressão
- aumento do alcance do jato de água

---

# Controle Matemático do Stepper

## Normalização da Distância

O sistema utiliza:

$$
[
u = \frac{d - d_{min}}{d_{max} - d_{min}}
]
$$

Onde:

- `d` = distância detectada
- `u` = fator proporcional entre 0 e 1

---

## Cálculo do RPM

$$
rpm = rpm_{min} + u(rpm_{max} - rpm_{min})
$$

---

## Frequência do Stepper

$$
f_{step} = \frac{rpm \cdot passos_por_volta \cdot microstep}{60}
$$

---

## Intervalo entre Pulsos

$$
intervalo = \frac{1}{f_{step}}
$$

---

# Estrutura do Código

O código foi dividido em:

- monitoramento
- detecção
- varredura
- localização
- medição
- atuação

Além disso, o sistema utiliza:

- timers independentes
- funções modulares
- controle de posição do stepper

---

# Controle Inteligente do Stepper

O sistema mantém:

- a posição atual do stepper

Isso evita:

- acúmulo infinito de passos
- colisões mecânicas
- travamentos

O stepper move apenas:

- a diferença necessária entre a posição atual e a posição desejada

---

# Bibliotecas Utilizadas

## MicroPython

Linguagem utilizada:

- Python embarcado para microcontroladores

---

## Bibliotecas

- `machine`
- `utime`
- `dht`
- `picozero`
- `servo`
- `hcsr04`

---

# Estrutura Física do Projeto

## Organização dos Componentes

```text
Raspberry Pi Pico
│
├── DHT22
├── MQ-2
├── LDR
├── HC-SR04
├── Servo Motor
├── Stepper + Driver
├── LED
└── Buzzer
```

---

# Possíveis Melhorias Futuras

## Software

- Controle não bloqueante do stepper
- Controle PID
- Interface web/dashboard
- Registro de eventos
- Sistema MQTT/IoT
- Comunicação Wi-Fi

---

## Hardware

- Sensor de chama IR
- Bomba d’água real
- Solenoides
- Sensores de fim de curso
- Bateria backup
- Sistema de alimentação dedicado

---

# Aplicações

O projeto pode ser adaptado para:

- automação industrial
- monitoramento de laboratórios
- depósitos
- salas técnicas
- ambientes IoT
- protótipos acadêmicos
- sistemas embarcados inteligentes

---

# Limitações do Protótipo

Por se tratar de um protótipo acadêmico:

- os sensores possuem limitações de precisão
- o sistema não substitui equipamentos reais de combate a incêndio
- o controle hidráulico é apenas conceitual
- o stepper representa a atuação mecânica do sistema

---

# Conclusão

O projeto demonstra conceitos importantes de:

- sistemas embarcados
- automação
- IoT
- controle proporcional
- integração de sensores
- motores e atuadores
- processamento em tempo real

Além disso, implementa:

- detecção inteligente
- localização automática do foco
- resposta automática ao incêndio

tornando-se um excelente projeto educacional e de prototipagem tecnológica.
