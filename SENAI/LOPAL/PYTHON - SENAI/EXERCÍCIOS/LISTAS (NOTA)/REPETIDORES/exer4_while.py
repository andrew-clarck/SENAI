#-*- coding: UTF-8 -*-
"""
4 - Faça um programa que leia vários inteiros positivos e mostre, no final, a soma
dos números pares e a soma dos números ímpares. O programa para quando entrar
um número maior que 1000.
"""

print("Esse programa irá ler números inteiros positivos e irá realizar a soma de todos os números pares e dos ímpares. Para encerrar, digite um número maior que 1000")

y = 1 #Ordem
num = 0
sp = 0 #Soma dos pares
si = 0 #Soma dos impares


while True:
    num = int(input("Digite o %iº número inteiro positivo, ou digite um número maior que 1000 para encerrar: " % y))
    y = y + 1
    if num > 1000:
        print("Você decidiu encerrar o programa.")
        break
    if num < 0 and num % 2 == 0:
        print("Você digitou um número negativo, tente novamente")
        sp = sp - num
    elif num < 0 and num % 2 != 0:
        si = si - num
    if num % 2 == 0:
        sp = sp + num
    else:
        si = si + num

print(f"A soma total dos números ímpares é de {si} e a dos pares é de {sp}.")

    
              
