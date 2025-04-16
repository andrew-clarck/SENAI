#-*- coding: UTF-8 -*-
"""
Escreva um programa que pergunte o salário do
funcionário e calcule o valor do aumento. Para salários
superiores a R$ 1.250,00, calcule um aumento de 10%.
Para os inferiores ou iguais, de 15%.
"""
print("Olá, preciso saber o seu salário para calcular o aumento")
S = float(input("Digite seu salário: "))

if S <= 1250:
    print("Você receberá um aumento de 15%")
    A1 = S * 15 / 100
    SF1 = S + A1
    print("Este é o seu salário com o aumento: R$%.2f" % SF1)
else:
    print("Você receberá um aumento de 10%")
    A2 = S * 10 / 100
    SF2 = S + A2
    print("Este é o seu salário com o aumento: R$%.2f" % SF2)
