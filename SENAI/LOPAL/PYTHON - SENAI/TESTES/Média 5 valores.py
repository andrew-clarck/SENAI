#-*- coding: UTF-8 -*-
v1 = float(input("Digite suas notas e eu direi a sua média, digite a primeira nota: "))
v2 = float(input("Digite sua segunda nota: "))
v3 = float(input("Digite sua terceira nota: "))
v4 = float(input("Digite sua quarta nota: "))
v5 = float(input("Digite sua quinta nota: "))

if v1 < 0 or v1 > 10 or v2 < 0 or v2 > 10 or v3 < 0 or v3 > 10 or v4 < 0 or v4 > 10 or v5 < 0 or v5 > 10:
           print("As notas não podem ser menores que 0 ou maiores que 10, tente novamente")
else:
    v6 = (v1 + v2 + v3 + v4 + v5)/5
    print("Sua média é: ", v6)
            
