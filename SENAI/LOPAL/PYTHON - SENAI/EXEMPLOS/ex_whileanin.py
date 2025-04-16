# -*- coding: UTF-8 -*-
print("Olá, eu lhe mostrarei as tabuadas do 1 ao 10")
C = int(input("Digite 1, se quiser ver as tabuadas, e 0 se não quiser: "))
tabuada = 1
if C == 1:
    while tabuada <= 10:
        n = 0
        print("Tabuada %d " % tabuada)
        while n <= 10:
            print("%d * %d = %d" % (tabuada, n, tabuada * n))
            n = n + 1
        tabuada = tabuada + 1
else:
    print("Você escolheu sair.")
