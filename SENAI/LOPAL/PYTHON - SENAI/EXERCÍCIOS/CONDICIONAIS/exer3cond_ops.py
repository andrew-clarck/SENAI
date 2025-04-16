#-*- coding: UTF-8 -*-
"""
Escreva um programa que leia dois números e que
pergunte qual operação você deseja realizar: soma (+),
subtração (-), multiplicação (*) e divisão (/). Exiba o
resultado da operação solicitada.
"""

print("Olá, peço que escreva dois números e a operação que quer realizar entre eles")
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
op = input("Digite o operador, ele deve ser um desses: +, -, *, / : ")

if op == "+":
    print("Você escolheu a soma!")
    R1 = num1 + num2
    print("Este é o resultado da soma dos dois números: ", R1)
elif op == "-":
    print("Você escolheu a subtração!")
    R2 = num1 - num2
    print("Este é o resultado da soma dos dois números: ", R2)
elif op == "*":
    print("Você escolheu a multiplicação!")
    R3 = num1 * num2
    print("Este é o resultado da soma dos dois números: ", R3)
elif op == "/":
    print("Você escolheu a divisão!")
    R4 = num1 / num2
    print("Este é o resultado da soma dos dois números: ", R4)
else:
    print("Operação inválida, tente novamente")
