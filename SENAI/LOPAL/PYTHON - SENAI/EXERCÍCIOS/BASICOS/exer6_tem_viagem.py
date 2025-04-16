#-*- coding: UTF-8 -*-
print("Olá, quero calcular o seu tempo de viagem, para isso, preciso da distância e a velocidade média da viagem")
S = float(input("Digite a distância, em quilômetros, da viagem: "))
VM = float(input("Digite a velocidade média, em quilômetros por hora: "))
T = S / VM
TA = round(T, 2)
print("Esse é o tempo aproximado, em horas, que essa viagem levou pra ser completa: ", TA)
