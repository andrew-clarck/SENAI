#-*- coding: UTF-8 -*-
"""
4) Faça um programa que leia um vetor de 10 caracteres
minúsculos e diga quantas consoantes foram lidas.
"""
L = []
C = []
x = 0
y = 1
consoantes = 0 

while x < 10:
    l = input("Digite a %iª letra, ela deve ser minúscula: " % y)
    if l == "a" or l == "e" or l == "i" or l == "o" or l == "u":
        print("Você digitou uma letra vogal.")
        x += 1
        y += 1
        L.append(l)
    else:
        y += 1
        x += 1
        consoantes += 1
        L.append(l)
        C.append(l)

print("Essas são as letras que você digitou: ", L)
print("Essas são todas as consoantes: ", C)
print("A quantidade de consoantes que você digitou foi de: ", len(C))
