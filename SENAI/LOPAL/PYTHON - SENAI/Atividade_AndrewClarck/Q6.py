#-*- coding: UTF-8 -*-
"""
Soma de Números Inteiros

Descrição:

Escreva um programa que solicite um número inteiro positivo e calcule a soma de todos os números inteiros de 1 até esse número.

Entrada:

Um número inteiro positivo.

Saída:


A soma dos números inteiros de 1 até o número informado.
"""
print("Olá usuário, este programa irá calcular a soma de todos os números inteiro de 1 até o número que você escolher. O número deve ser inteiro e positivo.")

num = int(input("Digite um número inteiro positivo: "))
soma = 0

if num > 0:
    for x in range(1, num + 1):
        soma += x
    print(f"O número {soma} é a soma de todos os números inteiros de 1 até {num}.")
else:
    print("Você digitou um número negativo, tente novamente.")
