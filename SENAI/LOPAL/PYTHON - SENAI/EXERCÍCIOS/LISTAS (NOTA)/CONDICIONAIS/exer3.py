#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler dois números inteiros e escrever o maior.
"""
print("Escreva dois números inteiros, e eu direi qual deles é o maior")
num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))

if num1 == num2:
    print("Números iguais, tente novamente")
elif num1 > num2:
    print("Número 1 é o maior")
else:
    print("Número 2 é o maior")
