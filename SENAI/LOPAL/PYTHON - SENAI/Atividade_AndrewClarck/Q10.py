#-*- coding: UTF-8 -*-
"""
Cálculo de Anos para 100 Anos

Descrição:

Escreva um programa que solicite a idade de um usuário e calcule em quantos anos ele terá 100 anos.

Entrada:

Um número inteiro representando a idade do usuário.

Saída:


O número de anos que faltam para o usuário completar 100 anos.
"""
print("Olá usuário, este programa irá calcular em quantos anos você terá 100 anos.")
idade = int(input("Digite a sua idade aqui, ela não pode ser igual ou maior que 100: "))

calculo = 100 - idade

if idade < 0 or idade >= 100:
    print("Você digitou uma idade inválida, tente novamente.")
else:
    print(f"Você terá 100 anos em {calculo} ano(s).")
