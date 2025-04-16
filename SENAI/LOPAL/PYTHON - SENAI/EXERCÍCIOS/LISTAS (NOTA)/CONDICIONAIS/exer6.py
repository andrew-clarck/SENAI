#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler dois números inteiros A e B e informar se A é divisível
por B.
"""
print("Digite dois números inteiros e eu informarei se o primeiro número é divisível pelo segundo")
num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
D = num1 % num2

if D == 0:
    print("O primeiro número é divisível pelo segundo número")
else:
    print("O primeiro número não é divisível pelo segundo número")
