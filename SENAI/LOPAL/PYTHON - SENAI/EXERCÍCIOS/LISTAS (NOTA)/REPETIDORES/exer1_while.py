#-*- coding: UTF-8 -*-
"""
1 - Faça um programa que receba valores, mostrando na tela, e calcula a soma e a
média desses números. Obs: O programa encerra quando receber um número
negativo.
"""
print("Digite diversos valores, eu irei mostrá-los novamente pra você, depois, quando o programa for encerrado, mostrarei a soma e a média de todos eles. Para encerrar, digite um número negativo.")
v = 0 #Valor digitado
x = 0 #Quantidade de valores digitados
y = 1 #Ordem
soma = 0 #Soma dos valores

while True:
    v = float(input("Digite o %iº valor: " % y))
    y = y + 1
    if v >= 0:
        print("Continue digitando.")
        soma = soma + v
        x = x + 1
        print(f"Você digitou o número {v}.")
    else:
        print(f"Você digitou o número {v}.")
        print("Você decidiu sair.")
        break

media = soma / x #Média dos números digitados
print(f"Essa é a soma de todos os números: {soma} e essa é a média: {media}")
