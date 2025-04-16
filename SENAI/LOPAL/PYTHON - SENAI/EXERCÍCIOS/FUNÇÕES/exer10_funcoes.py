#-*- coding: UTF-8 -*-
"""
10) Escreva um programa, com uma função que leia 2
valores (A e B), calcule e mostre a soma dos números
ímpares entre eles (inclusive A e B). Nesse caso, considere
que só serão informados valores inteiros positivos e que A é
menor do que B.
"""

print("Olá, o programa irá ler 2 valores inteiros (A e B), em seguida, ele irá calcular a soma dos números ímpares entre eles. A deve ser menor que B.")
A = int(input("Digite o valor A, ele deve ser positivo: "))
B = int(input("Digite o valor B, ele deve ser positivo: "))

if A >= B:
    A1 = A
    A = B
    B = A1
    
elif A < 0 or B < 0:
    print("Você digitou valores inválidos")

else:
    def somaimp(A,B):
        VI = 0 #Validação ímpares
        soma = 0
        for x in range(A, B + 1):
            VI = x % 2
            if VI != 0:
                soma = soma + x
                

        return f"O valor da soma dos números ímpares entre {A}(A) e {B}(B) é: {soma}."

    print(somaimp(A,B))

            
