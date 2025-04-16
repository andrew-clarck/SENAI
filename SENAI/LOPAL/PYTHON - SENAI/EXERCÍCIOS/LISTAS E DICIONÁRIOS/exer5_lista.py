#-*- coding: UTF-8 -*-
"""
5) Faça um programa que percorra duas listas e gere uma
terceira com os elementos das duas primeiras.
"""
L1 = [1, 2, 3, 4, 5]
L2 = [6, 7, 8, 9, 10]
L3 = []
print("Lista 1: ", L1)
print("Lista 2: ", L2)
L3.extend(L1)
L3.extend(L2)
print("Lista 3: ", L3)
