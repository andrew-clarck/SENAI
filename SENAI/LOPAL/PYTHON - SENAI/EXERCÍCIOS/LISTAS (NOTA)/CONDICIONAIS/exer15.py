#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler a temperatura atual e conforme leitura, imprimir o
resultado de acordo com a tabela abaixo.
"""
print("Olá, peço que me informe a temperatura, em Celsius, e eu direi como está o clima.")
T = int(input("Insira a temperatura: "))

if T < 15:
    print("Está muito frio.")
elif T >= 16 and T < 23:
    print("Está frio.")
elif T >= 23 and T < 26:
    print("Está agradável.")
elif T >= 26 and T < 30:
    print("Está calor.")
elif T => 30:
    print("Está muito quente.")
