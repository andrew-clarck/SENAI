#-*- coding: UTF-8 -*-
import math
""""
- Escreva um algoritmo em que leia um número e imprima a raiz quadrada do número
caso ele seja positivo ou igual a zero e o quadrado do número caso ele seja negativo. Obs:
Usar a biblioteca math.h.
"""

print("Olá, peço que digite um número, se ele for positivo ou igual a zero, farei sua raiz quadrada, caso seja negativo, farei ele ao quadrado")
num = float(input("Digite o número: "))

if num <0:
    Q = num * num
    print("Seu número é negativo, este é o resultado do cálculo: ", Q)
else:
    RQ = math.sqrt(num)
    print("Seu número é positivo, este é o resultado do cálculo: ", RQ)
