#-*- coding: UTF-8 -*-
"""
8) Faça um programa que peça a idade e a altura de 5
pessoas, armazene cada informação no seu respectivo
vetor. Imprima a idade e a altura na ordem inversa à
ordem lida.
"""
I = []
A = []

for x in range(6):
    i = int(input("Coloque a sua idade: "))
    a = int(input("Coloque a sua altura, em CENTÍMETROS: "))
    I.append(i)
    A.append(a)

print(f"Esta é a lista de idade, na ordem em que foi escrita: {I}")
print(f"Esta é a lista de altura, na ordem em que foi escrita: {A}")
I.reverse()
A.reverse()
print(f"Esta é a lista de idade, na ordem inversa: {I}")
print(f"Esta é a lista de altura, na ordem inversa: {A}")
