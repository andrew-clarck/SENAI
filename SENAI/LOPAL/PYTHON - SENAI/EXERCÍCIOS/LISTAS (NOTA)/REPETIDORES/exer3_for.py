#-*- coding: UTF-8 -*-
"""
3 - Escreva um programa que apresenta o Fatorial de um número.
Ex: Fat de 5 = 5X4X3X2X1 = 120.
"""
print("Olá usuário, esse programa irá fazer o fatorial de um número digitado por você.")
fat = int(input("Digite o número: "))
resultado = 1 
for v in range(fat, 0, -1):
    resultado = resultado * v

print(f"O fatorial de {fat} é igual à: {resultado}")
    
    
    
