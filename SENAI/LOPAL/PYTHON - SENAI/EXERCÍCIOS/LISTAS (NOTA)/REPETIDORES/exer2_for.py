#-*- coding: UTF-8 -*-
"""
2 - Faça um programa que calcule a soma dos primeiros 50 números pares.
"""
print("Esse programa irá lhe mostrar a soma dos 50 primeiros números pares.")

soma = 0

for v in range(2, 102, 2):
    soma = soma + v

print("Esse é o resultado da soma: ", soma)
