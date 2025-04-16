#-*- coding: UTF-8 -*-
"""
Faça um programa que receba valores, mostrando na tela, no final imprima o
maior e o menor desses números. Obs: O programa encerra quando receber um
número negativo.
"""

print("Este programa irá lhe mostrar o menor e o maior número dentro dos que você digitar. Para encerrar o programa, digite um número negativo")
num = float(input("Digite o 1º número: "))

menor = num
maior = num
y = 2 #Ordem

while True:
    num = float(input("Digite o %iº número, ou digite um número negativo para encerrar o programa: " % y))
    y = y + 1
    print(f"Você digitou o número {num}")
    if num < 0:
        print("Você escolheu encerrar o programa")
        break
    elif num > maior:
        maior = num
    elif num < menor:
        menor = num

print(f"O maior número escrito foi {maior} e o menor foi {menor}.")
