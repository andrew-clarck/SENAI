# -*- coding: UTF-8 -*-
x = int(input("Me diga um número, e quando ele for ultrapassar 10 o programa irá parar: "))
while x <= 10:
    print(x)
    x2 = int(input("Escolha quanto adicionar ao seu número, quando ele for passar de 10, o programa irá parar: "))
    x = x + x2
    
