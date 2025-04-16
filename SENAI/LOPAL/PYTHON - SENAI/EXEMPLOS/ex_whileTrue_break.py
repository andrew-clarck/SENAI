# -*- coding: UTF-8 -*-
s = 0
while True:
    v = int(input("Digite um número a somar ou 0 para sair. Os números se acumularão: "))
    if v == 0:
        break
    s = s + v
print("Você escolheu sair, este é o resultado da sua soma: ", s)
