#-*- coding: UTF-8 -*-
"""
Escreva um programa para aprovar o empréstimo
bancário para a compra de uma casa. O programa deve
perguntar o valor da casa a comprar, o salário e a
quantidade de anos a pagar. O valor da prestação mensal
não pode ser superior a 30% do salário. Calcule o valor da
prestação como sendo o valor da casa a comprar dividido
pelo número de meses a pagar.
"""
print("Olá, eu preciso aprovar seu empréstimo bancário para a compra da casa, para isso, preciso de algumas informações")
VC = float(input("Preciso que digite o valor da casa: "))
S = float(input("Agora, digite o valor do seu salário: "))
MP = int(input("Por quantos meses você irá pagar? Digite: "))
PM = VC / MP #Prestação mensal
VS = S * 30 / 100 #Validação do salário, 30% do salário

if PM > VS :
    print("Você não pode fazer esse empréstimo")
else:
    print("Seu empréstimo foi aprovado")
