# -*- coding: UTF-8 -*-
print("Digite 10 números, eles irão se somando e acumulando.")
n = 1
soma = 0
while n <= 10:
    x = int(input("Digite o %d número: " % n))
    soma = soma + x
    n = n + 1
print ("Soma: %d" % soma)
