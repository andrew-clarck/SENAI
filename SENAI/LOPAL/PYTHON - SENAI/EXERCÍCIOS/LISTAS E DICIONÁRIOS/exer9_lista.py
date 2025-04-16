#-*- coding: UTF-8 -*-
"""
9) Faça um programa que peça as 4 notas de 10 alunos,
calcule e armazene em um vetor a média de cada aluno,
imprima o número de alunos com média maior ou igual a
7.0.
"""
M = []

for x in range(11):
    soma = 0
    y = 1
    
    for x in range(4):
        n = float(input("Digite a %iª nota, caso você digite uma nota inválida, o programa encerrará: " % y))
        if n < 0 or n > 10:
            print("Você digitou uma nota inválida.")
            break
            
        else:
            y += 1
            soma += n
            
    if n < 0 or n > 10:
        break
    else:
        media = soma / 4
        print(f"A média do aluno é: {media}.")
        M.append(media)


print("Esta é a média dos 10 alunos: ", M)
    
        
