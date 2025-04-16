#-*- coding: UTF-8 -*-
"""
Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o
valor da compra for menor que R$ 20,00; caso contrário, o lucro será de 30%. Elabore
um algoritmo que leia o valor do produto e imprima o valor de venda para o produto.
"""
print("Olá, quero que insira o valor do produto e eu direi o valor que você deve vender. Insira um valor maior que 0")
VP = float(input("Insira o valor do produto: "))
LP1 = VP * 45 / 100 #lucro do produto, se o valor for menor que R$20,00
LP2 = VP * 30 / 100 #lucro do produto, se o valor for maior que R$20,00
VT1 = VP + LP1
VT2 = VP + LP2

if VP <= 0:
    print("Você inseriu um valor inválido, tente novamente.") 
elif VP < 20.00:
    print("Esse é o valor que você deve vende: R$%.2f" % VT1)
elif VP >= 20:
    print("Esse é o valor que você deve vender: R$%.2f" % VT2)
