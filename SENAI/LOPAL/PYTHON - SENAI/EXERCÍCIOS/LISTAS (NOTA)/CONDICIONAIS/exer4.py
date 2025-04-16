#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler um número inteiro e informar se o número é par ou ímpar.
"""
print("Olá, escreva um número inteiro e eu direi se ele é par ou ímpar")
num = int(input("Digite o número: "))
IP = num % 2

if IP == 0:
    print("O seu número é par")
else:
    print("O seu número é ímpar")
