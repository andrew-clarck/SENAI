#-*- coding: UTF-8 -*-
"""
Escreva um programa que calcule o preço a pagar pelo
fornecimento de energia elétrica. Pergunte a quantidade
de kWh consumida e o tipo de instalação: R para
residências, I para indústrias e C para comércios. Calcule o
preço a pagar, de acordo com a tabela a seguir
"""

print("Olá, eu irei calcular o valor que você deve pagar pelo fornecimento de energia elétrica, para isso, preciso conferir algumas coisas")
kWC = float(input("Insira o valor de kWh consumido em sua instalação: "))
IN = input("Coloque o tipo de instalação, R para residências, I para indústrias e C para comércios: ")

if kWC <= 500 and IN == "R":
    preco = 0.40
    VP = kWC * preco
    print("Este é o valor que você deve pagar: R$%.2f" % VP)
elif kWC > 500 and kWC <= 1000 and IN == "R":
    preco = 0.65
    VP = kWC * preco
    print("Este é o valor que você deve pagar: R$%.2f" % VP)
elif kWC > 1000 and IN == "R":
    print("Valor de kWh consumido muito alto para o tipo de instalação.")
if kWC <= 2500 and IN == "C":
    preco = 0.55
    VP = kWC * preco
    print("Este é o valor que você deve pagar: R$%.2f" % VP)
elif kWC > 2500 and kWC <= 5000 and IN == "C":
    preco = 0.60
    VP = kWC * preco
    print("Este é o valor que você deve pagar: R$%.2f" % VP)
elif kWC > 5000 and IN == "C":
    print("Valor de kWh consumido muito alto para o tipo de instalação.")
if kWC <= 10000 and IN == "I":
    preco = 0.55
    VP = kWC * preco
    print("Este é o valor que você deve pagar: R$%.2f" % VP)
elif kWC > 10000 and kWC <=15000 and IN == "I":
    preco = 0.60
    VP = kWC * preco
    print("Este é o valor que você deve pagar: R$%.2f" % VP)
elif kWC > 15000 and IN == "I":
    print("Informações inválidas, tente novamente")
