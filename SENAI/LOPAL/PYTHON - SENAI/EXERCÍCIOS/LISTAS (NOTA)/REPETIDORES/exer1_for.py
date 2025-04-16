#-*- coding: UTF-8 -*-
"""
1 - Faça um programa que mostre na tela todos os números de 1 a 50 e depois essa
mesma lista invertida (50 a 1) usando laço for.
"""

print("Esse programa irá te mostrar todos os números inteiros de 1 a 50, depois, ele irá fazer a mesma coisa com a ordem invertida")

for v in range(1, 51):
    print(v)

print("Agora, irá mostrar na ordem invertida.")

for v in range(50, 0, -1):
    print(v)
