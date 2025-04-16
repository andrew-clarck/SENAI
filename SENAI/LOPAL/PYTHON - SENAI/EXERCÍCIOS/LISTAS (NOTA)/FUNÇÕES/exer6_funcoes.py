#-*- coding: UTF-8 -*-
"""
6. Conversor de Temperatura
Enunciado: Você está viajando para diferentes regiões do mundo
e precisa converter as temperaturas de Celsius para Fahrenheit
e vice-versa. Crie uma função que converta uma temperatura de
acordo com a escolha do usuário.
Exemplo de Entrada:
Temperatura: 25
Conversão: Celsius para Fahrenheit
Exemplo de Saída:
25°C = 77°F
"""
while True:
        
    print("Esse programa irá converter uma temperatura em Celsius para Fahrenheit ou o inverso.")
    parar = int(input("Se quiser parar com o programa, digite 1, caso contrário, digite qualquer outro número: "))

    if parar == 1:
        print("Você escolheu parar.")
        break
    else:
        Temp = 0 #Temperatura em Celsius

        def conversao():
            Temp = int(input("Digite a temperatura em Celsius. Caso você queira digitar a temperatura em Fahrenheit, digite -999: "))
            if Temp == -999:
                TF = int(input("Digite a temperatura em Fahrenheit: ")) #Temperatura em Fahrenheit
                TCC = (TF - 32) * 5 / 9 #Temperatura em Celsius convertida
                print(f"A temperatura de {TF}ºF convertida para Celsius é: {TCC}ºC.")
            else:
                TFC = (Temp * 9 / 5) + 32 #Temperatura em Fahrenheit convertida
                print(f"A temperatura de {Temp}ºC convertida para Fahrenheit é: {TFC}ºF.")

        conversao()


    
    
