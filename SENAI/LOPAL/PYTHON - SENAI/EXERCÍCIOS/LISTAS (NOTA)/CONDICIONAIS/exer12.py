#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler duas variáveis inteiras A e B e garantir que A e B fiquem
em ordem crescente, ou seja, a variável deverá armazenar o menor valor fornecido e a
variável B o maior.
"""
print("Insira dois valores inteiros, valor A e valor B, faça com que esses valores fiquem em ordem crescente, ou seja, A deve ser MENOR que B.")
num1 = int(input("Insira o primeiro valor: "))
num2 = int(input("Insira o segundo valor: "))

if num1 == num2:
    print("Você inseriu valores inválidos, tente novamente.")
elif num1 > num2:
    A = num2
    B = num1
    print(f"As variáveis em ordem crescente são: {A}(A) e {B}(B).")
else:
    A = num1
    B = num2
    print(f"As variáveis em ordem crescente são: {A}(A) e {B}(B).")
    
