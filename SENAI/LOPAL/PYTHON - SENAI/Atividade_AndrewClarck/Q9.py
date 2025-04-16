#-*- coding: UTF-8 -*-
"""
Verificação de Maioridade

Descrição:

Escreva um programa que solicite o nome e a idade de um usuário e informe se ele é maior ou menor de idade.

Entrada:

Uma string representando o nome do usuário e um número inteiro representando a idade.

Saída:


A mensagem "Maior de idade" ou "Menor de idade".
"""
print("Olá usuário, este programa irá lhe dizer se você é maior de idade ou não.")
nome = input("Primeiro, digite seu nome: ")
idade = int(input("Digite a sua idade: "))

if idade >= 0 and idade < 18:
    print(f"{nome}, você é menor de idade.")
elif idade >= 18 and idade <= 160:
    print(f"{nome}, você é maior de idade.")
else:
    print("Você digitou uma idade inválida, tente novamente.")
