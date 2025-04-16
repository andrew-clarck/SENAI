#-*- coding: UTF-8 -*-
"""
Entrar com vários números positivos e imprimir a
média dos números digitados.
"""
print("Digite diversos números inteiros positivos, e assim que encerrar, farei a média deles. Para encerrar o programa, digite um valor abaixo de 0.")

n = 0 #Valor digitado
x = 0 #Quantidade de valores digitados
y = 1 #Ordem
soma = 0 #Soma dos valores digitados

while True:
    n = float(input("Digite o %i valor, ou digite um valor negativo para sair: " % y))
    y = y + 1
    if n >= 0:
        print("Você digitou um número positivo, por favor, continue.")
        soma = soma + n
        x = x + 1
    else:
        print("Você escolheu sair.")
        break

media = soma / x #Média dos valores digitados
print("Essa é a média de todos os valores digitados: ", media)
