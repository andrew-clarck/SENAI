#-*- coding: UTF-8 -*-
"""
Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado
seja maior que 20, este deverá ser apresentado somando-se a ele mais 8; caso o valor
somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.
"""
print("Olá usuário, eu irei fazer uma soma entre 2 números, caso essa soma seja maior que 20, eu irei adicionar mais 8, caso seja menor que 20, subtrairei por 5")
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
soma = num1 + num2

if soma <= 20:
    VF = soma - 5
    print("Este é o resultado da soma: ", soma)
    print("Este é o resultado da subtração, pelo resultado ser menor que 20: ", VF)
else:
    VF = soma + 8
    print("Este é o resultado da soma: ", soma)
    print("Este é o resultado da adição, pelo resultado ser maior que 20: ", VF)
