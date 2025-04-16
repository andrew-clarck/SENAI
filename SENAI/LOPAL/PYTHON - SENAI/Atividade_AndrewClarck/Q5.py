#-*- coding: UTF-8 -*-
"""
Exibição de Tabuada

Descrição:

Escreva um programa que solicite um número e exiba a tabuada desse número de 1 a 10.

Entrada:

Um número inteiro.

Saída:


A tabuada do número informado.
"""
print("Olá usuário, este programa irá lhe mostrar a tabuada de um número inteiro escolhido por você.")
num = int(input("Digite o número: "))

for x in range(1, 11):
    multiplicacao = num * x
    print(f"{num} x {x} = {multiplicacao}")


