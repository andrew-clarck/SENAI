#-*- coding: UTF-8 -*-
"""
Em uma empresa paga-se R$ 19,50 a hora e recolhe-se para o imposto de renda 10%
dos salários acima de R$ 1500,00. Dado o número de horas trabalhadas por um
funcionário, informar o valor do seu salário líquido.
"""
print("Olá, preciso saber por quantas horas você trabalha, para lhe informar o seu salário líquido")
H = int(input("Digite quantas horas você trabalha: "))
S = H * 19.50
I = S * 10 / 100
SI = S - I

if S <= 1500.00:
    print("Seu salário líquido é de R$%.2f" % S)
else:
    print("Seu salário líquido é de R$%.2f" % SI)
