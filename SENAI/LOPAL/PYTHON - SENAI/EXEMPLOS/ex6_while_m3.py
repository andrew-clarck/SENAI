# -*- coding: UTF-8 -*-
fim = int(input("Digite o último número a imprimir e eu lhe mostrarei todos os múltiplos de 3 entre ele e 0: "))
x = 0
while x <= fim:
    if x % 3 == 0:
        print(x)
    x = x + 3
