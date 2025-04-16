#-*- coding: UTF-8 -*-
"""
3. Tabela de Multiplicação
Enunciado: Você precisa de uma tabela de multiplicação para estudar, então crie
uma função que gere a tabela de multiplicação de um número fornecido pelo
usuário. A tabela deve ir de 1 até 10.
Exemplo de Entrada:
3
Exemplo de Saída:
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
"""
while True:
    print("Esse programa irá lhe dar uma tabela de multiplicação de um número dado por você.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        v = 0

        def tabuada():
            v = int(input("Digite o número: "))
            
            for x in range(1, 11):
                m = v * x #Multiplicação
                print(f"{v} x {x} = {m}")

        tabuada()
            
