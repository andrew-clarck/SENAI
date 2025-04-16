#-*- coding: UTF-8 -*-
"""
4. Contagem Regressiva
Enunciado: Você está participando de um evento que conta com
uma contagem regressiva antes de algo grande acontecer. Crie
uma função que imprima a contagem regressiva até zero. A cada
número, ele deve ser impresso, e ao final deve aparecer uma
mensagem de celebração!
Exemplo de Entrada:
5
Exemplo de Saída:
5
4
3
2
1
Feliz Ano Novo!
"""
while True:
    
    print("Esse programa irá fazer uma contagem regressiva para um aniversário, para isso, você deve digitar o número em que a contagem irá começar.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        v = 0

        def contagem():
            v = int(input("Digite o número em que a contagem irá iniciar: "))

            for x in range(v, 0, -1):
                print(x)

            print("Feliz Aniversário!")

        contagem()
