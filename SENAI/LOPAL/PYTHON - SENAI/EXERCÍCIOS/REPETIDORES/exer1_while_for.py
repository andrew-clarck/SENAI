#-*- coding: UTF-8 -*-
"""
Entrar com números e imprimir o triplo de cada
número. O programa acaba quando entrar o número
-999.
"""

print("Olá, peço que digite números, eu multiplicarei eles por 3. Caso você digite o número -999, o programa encerrará")
x = 1
multiplicacao = 0
Y = 1 #Ordem dos números
while True:
    x = int(input("Digite o %i número, ou digite -999 se quiser sair: " % Y))
    Y = Y + 1
    if x == -999:
        print("Você escolheu sair, tchau.")
        break
    multiplicacao = x * 3
    print("Esse é o resultado da multiplicação: ", multiplicacao)

    
    
