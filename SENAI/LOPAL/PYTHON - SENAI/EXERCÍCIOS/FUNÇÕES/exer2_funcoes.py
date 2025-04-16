#-*- coding: UTF-8 -*-

"""
Faça um programa com uma função que receba dois
números e retorne True se o primeiro número for
múltiplo do segundo.
"""

print("Esse programa vai receber 2 números e retornará True caso o primeiro número seja múltiplo do segundo.")

num1 = 0
num2 = 0
multiplo = 0

def multiplo():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    multiplo = num1 % num2
    if multiplo == 0:
        return True
    else:
        print(f"O primeiro número {num1} não é múltiplo do segundo número {num2}.")

print(multiplo())
