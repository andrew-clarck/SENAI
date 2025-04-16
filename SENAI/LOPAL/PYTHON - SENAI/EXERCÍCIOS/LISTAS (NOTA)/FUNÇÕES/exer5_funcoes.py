#-*- coding: UTF-8 -*-
"""
5. Verificador de Número Primo
Enunciado: Em uma aventura matemática, o personagem encontra
números misteriosos e precisa determinar se eles são primos.
Um número primo é aquele maior que 1 e que não é divisível por
nenhum outro número além de 1 e ele mesmo. Sua missão é criar
uma função que verifica se um número é primo.
Exemplo de Entrada:
7
Exemplo de Saída:
O número 7 é primo!
"""
while True:
    
    print("Esse programa irá identificar se o número inteiro digitado por você é primo.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        v = int(input("Digite o número INTEIRO: "))
    if v <= 0:
        print("Valor inválido, pois é igual ou menor que 0.")
    else:
            def primo(v):
                divisor = 0
                for x in range(2, v):
                    d = v % x #Divisão
                    if d == 0:
                        print("Divisor encontrado.")
                        divisor = divisor + 1
                        break

                if divisor > 0:
                    print(f"O número {v} não é primo, pois possui um divisor além dele e de 1.")
                else:
                    print(f"O número {v} é primo!")

            primo(v)
