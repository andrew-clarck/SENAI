#-*- coding: UTF-8 -*-
"""
7) Faça um programa para selecionar os elementos de
uma lista, de forma a copiá-los para outras duas listas.
Nesse caso, considere que, inicialmente, os valores estão
na lista V = [9, 8, 7, 12, 0, 13, 21], mas que devem ser
copiados para a P, se forem pares; ou para a I, se forem
ímpares.
"""
V = [9, 8, 7, 12, 0, 13, 21]
P = []
I = []

for x in V:
    if x % 2 == 0:
        P.append(x)
    else:
        I.append(x)

P.sort()
I.sort()
print(f"Esta é a lista: {V}")
print(f"Estes são os números pares da lista, em ordem de menor para o maior: {P}")
print(f"Estes são os números ímpares da lista, em ordem de menor para o maior: {I}")
