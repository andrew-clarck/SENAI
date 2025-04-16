# -*- coding: UTF-8 -*-
fim = int(input("Digite o último número a imprimir e eu lhe mostrarei todos os ímpares entre ele e 0: "))
x = 0
while x <= fim:
    if x % 2 == 1:
        print(x)
    x = x + 1
