#-*- coding: UTF-8 -*-
"""
Monte um programa que classifique a faixa etária das pessoas conforme a idade que
foi informada para elas, segundo a tabela abaixo:
Bebê → menos que 2 anos de vida
Criança → maior que 2 e até 12 anos
Adolescente → maior que 12 mas menor que 23
Adulto → maior que 23 mas menor que 70
Idoso → maior que 70
"""
print("Olá, me diga a idade de uma pessoa e eu lhe direi a sua faixa etária.")
I = int(input("Insira a idade: "))

if I < 0:
    print("Você inseriu uma idade inválida, tente novamente.")
elif I < 2:
    print("Essa pessoa é um bebê.")
elif I < 12:
    print("Essa pessoa é uma criança.")
elif I < 23:
    print("Essa pessoa é um adolescente.")
elif I < 70:
    print("Essa pessoa é um adulto.")
else:
    print("Essa pessoa é um idoso.")
