# -*- coding: UTF-8 -*-
"""
a = int(input("Digite um número: ")) #Variável global

def calcula_e_imprime():
    global a
    return a + 12
    
print(calcula_e_imprime())
"""

resultado = 0

def calcula_e_imprime():
    global resultado
    a = int(input("Digite um número: "))
    resultado = a + 12 + 13
    
calcula_e_imprime()

print("O resultado até aqui é de: ", resultado)

soma = resultado + 4

print("O resultado final é de: ", soma)
