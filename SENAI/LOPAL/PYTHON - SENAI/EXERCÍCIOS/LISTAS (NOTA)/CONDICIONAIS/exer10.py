#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler três valores reais e informar se estes podem ou não formar
os lados de um triângulo e qual tipo de triângulo seria: equilátero, isósceles ou escaleno.
Obs: E no caso do usuário informar algum dos lados maior que a soma dos outros 2 lados
configura uma figura geométrica que não caracteriza um triângulo
"""
print("Olá usuário, quero que me informe três valores reais, e eu direi se eles podem formar os lados de um triângulo, além disso, direi o tipo do triângulo.")
v1 = float(input("Insira o primeiro valor: "))
v2 = float(input("Insira o segundo valor: "))
v3 = float(input("Insira o terceiro valor: "))
vt1 = v1 + v2
vt2 = v1 + v3
vt3 = v2 + v3

if v1 > vt3 or v2 > vt2 or v3 > vt1 or v1 == 0 or v2 == 0 or v3 == 0:
    print("Esses valores não configuram um triângulo, tente novamente.")
elif v1 == v2 and v2 == v3:
    print("Seu triângulo é um triângulo equilátero.")
elif v1 == v2 and v2 != v3 or v1 == v3 and v3 != v2 or v2 == v3 and v3 != v1:
    print("Seu triângulo é um triângulo isósceles.")
elif v1 != v2 and v2 != v3:
    print("Seu trângulo é um triângulo escaleno.")
