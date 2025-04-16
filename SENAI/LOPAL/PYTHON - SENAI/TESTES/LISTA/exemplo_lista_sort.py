# -*- coding: UTF-8 -*-
"""
Método sort() pode ser utilizado para ordenar as
listas de valores numéricos ou de strings. Ele ordena em ordem do menor para o maior com números e em ordem alfabética com strings

Exemplo 16: Ordenação de lista.
"""

numeros = [2, 5, 3.14, 1, -7]
numeros.sort()
print(numeros[0]) #Manipulação da ordem das posições com o sort
print(numeros)
animais = ["macacos", "gatos", "cachorros", "ursos",
"elefantes"]
print(animais[0]) #Antes da manipulação da ordem da lista
animais.sort()
print(animais[0]) #Após a manipulação
print(animais)
