#-*- coding: UTF-8 -*-

"""
1. Volume de um Cilindro
Descrição:
Escreva um programa com uma função que leia a altura e o raio de um cilindro e
imprima o volume do mesmo (Limite a 2 casas decimais o retorno).
Fórmula:
V= π × raio2 × altura
Entrada:
● Um número real representando o raio do cilindro.
● Um número real representando a altura do cilindro.
Saída:
● O volume do cilindro com duas casas decimais.
"""
while True:
    
    print("Olá, esse programa irá receber a altura e o raio de um cilindro e retornará o seu volume.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        h = 0
        r = 0
        v = 0

        def volume():
            h = float(input("Digite a altura do cilindo: "))
            r = float(input("Digite o raio do cilindro: "))
            v = 3.14 * (r * r) * h
            print("Esse é o valor do volume desse cilindro: %.2f" % v)

        volume()

