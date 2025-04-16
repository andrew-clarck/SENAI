#-*- coding: UTF-8 -*-
"""
Escreva um algoritmo que receba um número e imprima uma das mensagens: “é
múltiplo de 3” ou “não é múltiplo de 3”.
"""
print("Olá usuário, digite um número inteiro e eu direi se ele é ou não múltiplo de 3")
num = int(input("Digite o número: "))
M3 = num % 3

if M3 == 0:
    print("O seu número é múltiplo de 3")
else:
    print("O seu número não é múltiplo de 3")
