#-*- coding: UTF-8 -*-
"""
6) A lista de temperaturas de Mons, na Bélgica, foi
armazenada na lista T = [-10, -8, 0, 1, 2, 5, -2, -4]. Faça um
programa que imprima a menor e a maior temperatura,
assim como a temperatura média.
"""
T = [-10, -8, 0, 1, 2, 5, -2, -4]
soma = 0
T.sort()

print(f"Estas foram todas as temperaturas de Mons na Bélgica, ordenadas de menor para maior: {T}")
print(f"Estes são a menor e a maior temperatura registrada em Mons, na Bélgica: {T[0]}ºC e {T[-1]}ºC ")


for x in T:
    soma += x

media = soma / len(T)

print(f"Essa é a média das temperaturas é de {media}ºC.")
