#-*- coding: UTF-8 -*-
"""
Conversão de Fahrenheit para Celsius

Descrição:

Escreva uma função converter_para_celsius que receba uma temperatura em Fahrenheit e retorne a temperatura equivalente em Celsius. Solicite uma temperatura em Fahrenheit, chame a função e exiba o resultado.

Fórmula:

Celsius = (Fahrenheit - 32) * 5/9

Entrada:

Um número real representando a temperatura em Fahrenheit.

Saída:


A temperatura equivalente em Celsius.
"""
print("Olá usuário, esse programa irá lhe solicitar uma temperatura em Fahrenheit para que ele converta em Celsius.")

def converter_para_celsius():
    tf = float(input("Digite a temperatura em Fahrenheits: "))
    tc = (tf - 32) * 5 / 9
    print(f"{tf}ºF em Celsius é {tc}ºC.")

converter_para_celsius()
    
