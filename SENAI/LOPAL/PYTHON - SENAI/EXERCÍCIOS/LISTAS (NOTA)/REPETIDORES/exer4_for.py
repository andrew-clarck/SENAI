#-*- coding: UTF-8 -*-
"""
4 - Escreva um programa que apresenta os números divisores de um número.
"""
print("Olá usuário, esse programa irá mostrar todos os divisores de um número digitado por você.")
n = int(input("Digite um número: "))

for v in range(1, n+1):
    if n % v == 0:
        print(v)
