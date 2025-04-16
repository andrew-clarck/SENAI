#-*- coding: UTF-8 -*-
print("Olá, quero que me fale uma quantidade de dias, horas, minutos e segundos e eu direi eles em segundos, todos somados")

d = int(input("Digite a quantidade de dias: "))
h = int(input("Digite a quantidade de horas: "))
m = int(input("Digite a quantidade de minutos: "))
s = int(input("Digite a quantidade de segundos: "))

print("Agora, converterei todos em segundos e somarei")
ds = d * 86400
hs = h * 3600
ms = m * 60
st = ds + hs + ms + s
print("Aqui está, todo esse tempo em segundos: ", st)
