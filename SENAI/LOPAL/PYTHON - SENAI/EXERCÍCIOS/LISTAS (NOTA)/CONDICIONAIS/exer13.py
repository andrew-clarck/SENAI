#-*- coding: UTF-8 -*-
"""
Faça um algoritmo para ler três notas e o número de faltas de um aluno e escrever
qual a sua situação final: Aprovado, Reprovado por Falta ou Reprovado por Média. A
média para aprovação é 7,0 e o limite de faltas é 25% do total de aulas. O número de aulas
ministradas no semestre foi de 80. A reprovação por falta sobrepõe a reprovação por
Média.
"""
print("Olá aluno, preciso saber suas três notas e o seu número de faltas para dizer sua situação final.")
n1 = float(input("Insira a primeira nota: "))
n2 = float(input("Insira a segunda nota: "))
n3 = float(input("Insira a terceira nota: "))
F = int(input("Insira a quantidade de faltas: "))
VF = 80 * 25 /100 #validação de faltas
M = (n1 + n2 + n3) / 3

if n1 < 0 or n1 > 10 or n2 < 0 or n2 > 10 or n3 < 0 or n3 > 10 or F > 80:
    print("Você inseriu notas ou faltas inválidas, tente novamente.")
elif F > 20:
    print("Você foi reprovado por faltas.")
elif M >= 0 and M < 7:
    print("Você foi reprovado por média.")
elif M >= 7 and M <= 10:
    print("Você foi aprovado, parabéns!")

