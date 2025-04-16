#-*- coding: UTF-8 -*-
"""
Numa faculdade, os alunos com média maior ou igual a 7,0 são aprovados, aqueles
com média inferior a 3,0 são reprovados e os demais ficam de recuperação. Dadas as duas
notas de um aluno, informe sua situação. Emitir as mensagens aprovado, reprovado e
recuperação, respectivamente.
"""
print("Olá aluno, quero que me informe suas duas notas, e eu direi a sua situação.")
n1 = float(input("Insira o valor da sua primeira nota: "))
n2 = float(input("Insira o valor da sua segunda nota: "))
M = (n1 + n2) / 2

if n1 < 0 or n1 > 10 or n2 < 0 or n2 > 10:
    print("Você inseriu notas inválidas, tente novamente.")
elif M >= 0 and M < 3:
    print("Você está reprovado.")
elif M >= 3.0 and M < 7:
    print("Você está de recuperação.")
elif M >= 7.0 and M <= 10:
    print("Você está aprovado, parabéns!")

