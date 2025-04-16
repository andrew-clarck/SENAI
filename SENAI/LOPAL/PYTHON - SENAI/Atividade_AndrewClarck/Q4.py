#-*- coding: UTF-8 -*-
"""
Cálculo de Aumento Salarial

Descrição:

Escreva um programa que solicite o nome e o salário de um funcionário. Se o salário for menor que R$3000, aplique um aumento de 10%; caso contrário, aplique um aumento de 5%. Exiba o novo salário.

Entrada:

Uma string representando o nome do funcionário e um número real representando o salário.

Saída:


O novo salário do funcionário.
"""
print("Olá usuário, este programa calculará o aumento do seu salário, para isso, são necessárias algumas informações.")
nome = input("Primeiro, digite o seu nome: ")
salario = float(input("Agora, digite o seu salário. Caso ele seja menor que R$3000,00 o seu aumento será de 10%, caso contrário, será de 5%: "))

if salario > 0 and salario < 3000:
    aumento = salario * 10 / 100
    st = salario + aumento #Salário total
    print(f"Funcionário {nome}, esse será o seu aumento de salário: R${aumento:.2f}, e esse será o novo salário: R${st:.2f}.")
elif salario >= 3000:
    aumento = salario * 5 / 100
    st = salario + aumento #Salário total
    print(f"Funcionário {nome}, esse será o seu aumento de salário: R${aumento:.2f}, e esse será o novo salário: R${st:.2f}.")
else:
    print("Você digitou um valor inválido para o salário, tente novamente.")
