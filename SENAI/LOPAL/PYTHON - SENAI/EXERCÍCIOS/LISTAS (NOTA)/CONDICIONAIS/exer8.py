#-*- coding: UTF-8 -*-
"""
A prefeitura de Contagem abriu uma linha de crédito para os funcionários estatutários.
O valor máximo da prestação não poderá ultrapassar 30% do salário bruto. Fazer um
algoritmo que permita entrar com o salário bruto e o valor da prestação, e informar se o
empréstimo pode ou não ser concedido.
"""
print("Olá, preciso saber qual o valor do seu salário bruto e o valor da prestação que você quer. Preciso dessas informações para ver se a prestação pode ser concedida.")
SB = float(input("Insira o valor do seu salário bruto: "))
P = float(input("Insira o valor da prestação: "))
CP = SB * 30 / 100 #confirmação da prestação, 30% do salário bruto

if P > CP:
    print("Infelizmente, seu empréstimo não pode ser concedido, pois está acima de 30% do valor de seu salário bruto.")
else:
    print("Seu empréstimo foi liberado.")
