#-*- coding: UTF-8 -*-
"""
Exibição de Números com While

Descrição:

Escreva um programa que solicite um número inteiro e exiba todos os números de 1 até esse número utilizando um laço while.

Entrada:

Um número inteiro.

Saída:


A sequência de números de 1 até o número informado.
"""
print("Olá usuário, este programa irá te exibir todos os número inteiros de 1 até um número inteiro que você escolher.")
num = int(input("Digite o número: "))
x = 1

while x <= num:
    print(x)
    x += 1

print(f"Esses foram todos os números de 1 até {num}.")
