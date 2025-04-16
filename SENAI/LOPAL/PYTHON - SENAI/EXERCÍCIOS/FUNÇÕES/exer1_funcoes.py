#-*- coding: UTF-8 -*-
"""
1) Faça um programa com uma função que retorne o
maior de dois números.
"""

"""
print("Olá, esse programa irá lhe mostrar o maior entre 2 números que você escolher.")

num1 = 0
num2 = 0

def maior():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    if num1 > num2:
        print(f"O número {num1} é o maior entre: {num1} e {num2}.")
    elif num1 < num2:
        print(f"O número {num2} é o maior entre: {num1} e {num2}.")
    else:
        print("Você digitou 2 números iguais, tente novamente.")


maior()
maior()
"""

"""
print("Olá, esse programa irá lhe mostrar o maior entre 2 números que você escolher.")

num1 = 0
num2 = 0

def maior():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    if num1 > num2:
       return num1
    elif num1 < num2:
       return num2
    else:
        print("Você digitou 2 números iguais, tente novamente.")


print("Esse é o maior número: ", maior())
print("Esse é o maior número: ", maior())
"""

