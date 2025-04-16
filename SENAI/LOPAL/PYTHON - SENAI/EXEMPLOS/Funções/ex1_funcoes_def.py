# -*- coding: UTF-8 -*-
"""
def soma(a, b):
    print(a + b)
    
soma(2, 9)
soma(7, 8)
soma(10, 15)


#a e b: parâmetros da função.
"""


def media():
    num = float(input("Digite um valor: "))
    num2 = float(input("Digite outro valor: "))
    media = (num + num2) / 2
    print("A média desses 2 valores é: ", media)

media() #Sem essa linha, o código não vai ser reproduzido. essa linha chama a função: funcao()
"""
media()
se você chamar outro, o código se reproduzirá duas vezes
"""
