#-*- coding: UTF-8 -*-
"""
5 - Faça um programa para exibir a tabuada de 0 a 9.
"""
print("Esse programa exibirá a tabuada de 0 a 9.")
i = 0 #Ordem das tabuadas

for v in range(0, 10):
    print("Tabuada do %i:" % i)
    i = i + 1
    for x in range(0, 11):
        print(f"{v} X {x} = {v * x} ")
