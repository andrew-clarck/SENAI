#-*- coding: UTF-8 -*-
"""
Ler vários números e informar quantos números entre
100 e 200 foram digitados. Quando o valor 0 (zero) for
lido, o programa deve cessar sua execução.
"""

print("Olá usuário, esse programa irá ler vários números, quando o programa for encerrado, ele dirá quanto deles estavam entre 100 e 200. Para encerrar o programa, digite o número 0")
y = 1 #Ordem
x = 0 #Número digitado
xe = 0 #Números entre 100 e 200

while True:
    x = float(input("Digite o %i número, ou digite 0 para encerrar o programa: " % y))
    y = y + 1
    if x >= 100 and x <= 200:
        xe = xe + 1
        print("Continue digitando.")
    elif x == 0:
        print("Você decidiu parar.")
        break
    else:
        print("Continue digitando.")

print("Essa é a quantidade de números entre 100 e 200 digitados: ", xe)
