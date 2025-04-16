#-*- coding: UTF-8 -*-
"""
3) Faça um programa que leia 4 notas, mostre as notas e a
média na tela.
"""
Notas = []
x = 0
soma = 0
y = 1

while x < 4:
    n = float(input("Digite a %iª nota: " % y))
    if n < 0 or n > 10:
        print("Você digitou uma nota inválida, tente novamente.")
    else:
        y += 1
        x += 1
        soma += n
        Notas.append(n)

media = soma / 4
print("Essas são as suas notas: ", Notas)
print("Essa é a sua média: ", media)
    
