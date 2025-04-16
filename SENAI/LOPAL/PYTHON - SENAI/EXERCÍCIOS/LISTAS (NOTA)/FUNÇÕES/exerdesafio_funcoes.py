#-*- coding: UTF-8 -*-
"""
Contagem de Dígitos
Enunciado: Você precisa contar quantos dígitos tem um número
fornecido pelo usuário. Crie uma função que faça essa
contagem.

Exemplo de Entrada:
12345

Exemplo de Saída:
O número 12345 tem 5 dígitos.

Como funciona?
Use um laço while para dividir o número por 10 até ele se
tornar zero, contando o número de divisões realizadas.
"""
while True:
        
    print("Esse programa irá identificar quantos dígitos tem um número digitado por você.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        v = 0
        def digitos():
            v = int(input("Digite um número inteiro: "))
            cd = 1 #Contagem de dígitos
            v1 = v 
            while True:
                v1 = v1 / 10 #Divisão
                if v1 >= 1:
                    cd = cd + 1
                else:
                    break
            print(f"O número {v} tem {cd} dígitos.")
            
        digitos()
                
                
        
