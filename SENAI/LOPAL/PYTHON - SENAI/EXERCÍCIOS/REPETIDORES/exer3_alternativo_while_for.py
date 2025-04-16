#-*- coding: UTF-8 -*-
"""
Entrar com vários números positivos e imprimir a
média dos números digitados.
"""
print("Digite diversos números inteiros positivos, e assim que encerrar, farei a média deles.")
valor_repetir = int(input("Digite a quantidade de números que você quer inserir: ")) #Quantidade de vezes que irá repetir, também será o valor que vai dividir
acum = 0

for v in range(0, valor_repetir):
    valor_conta = float(input("Digite um valor POSITIVO: "))
    acum = acum + valor_conta

media = acum / valor_repetir
print("Essa é a média dos valores que você inseriu: ",  media)
