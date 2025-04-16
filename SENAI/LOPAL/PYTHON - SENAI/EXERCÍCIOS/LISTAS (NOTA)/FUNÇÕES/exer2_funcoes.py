#-*- coding: UTF-8 -*-
"""
2. Número perfeito
Enunciado:
Escreva um programa em Python que, dado um número inteiro positivo, determine
se ele é um número perfeito. Um número perfeito é um número que é igual à soma
de seus divisores positivos (excluindo ele mesmo). Por exemplo, 6 é um número
perfeito, pois seus divisores são 1, 2 e 3, e 1 + 2 + 3 = 6.

Exemplo de Entrada:
6

Exemplo de Saída:
O número 6 é perfeito!
"""
while True:
        
    print("Esse programa irá receber um número inteiro positivo e dirá se ele é perfeito, um número é um número que é igual à soma de seus divisores positivos.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        v = 0 #Valor
        d = 0 #Divisão

        def np():
            v = int(input("Digite um número inteiro positivo: "))
            soma = 0
            for x in range(1, v):
                d = v % x
                if d == 0:
                    soma = soma + x
            
            if soma == v:
                print(f"O número {v} é perfeito!")
            else:
                print(f"O número {v} não é perfeito")

        np()
