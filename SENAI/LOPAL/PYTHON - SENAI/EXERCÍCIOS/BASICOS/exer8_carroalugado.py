#-*- coding: UTF-8 -*-
print("Olá, eu irei calcular o valor que você deve pagar pelo carro alugado")
KM = float(input("Primeiro, me fale a quantidade de quilômetros rodados com o carro: "))
D = int(input("Agora, me fale a quantidade de dias com o carro: "))
VD = 60 * D
VK = 0.15 * KM
VT = VD + VK
print("Esse é o valor que você deve pagar pelo carro alugado: ", VT)

