#-*- coding: UTF-8 -*-
"""
3) Faça um programa com uma função que receba o lado
(l) de um quadrado e retorne a sua área (A = lado2).
"""

print("Olá, esse programa vai receber o valor de um lado de um quadrado e retornará a área dele.")

L = 0
area = 0
cm = 0
m = 0

def area():
    L = float(input("Digite o valor do lado: "))
    area = L ** 2
    return area
    

print("O valor da área é: ", area())
