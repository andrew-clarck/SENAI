#-*- coding: UTF-8 -*-
"""
Construa um algoritmo para determinar se o indivíduo esta com um peso favorável.
Essa situação é determinada através do IMC (Índice de Massa Corpórea), que é definida
como sendo a relação entre o peso (PESO) e o quadrado da Altura (ALTURA) do
indivíduo.
"""
print("Olá usuário, eu irei identificar se seu peso é ideal e favorável, através da tabela IMC, para isso, preciso do seu peso, em kg, e da sua altura, em metros.")
P = float(input("Insira o seu peso, em kg: "))
A = float(input("Insira a sua altura, em metros: "))
IMC = P / (A*A)

if P <= 0 or A <= 0:
    print("Você inseriu valores inválidos, tente novamente")
elif IMC < 20:
    print("Seu IMC é menor que 20. Você está abaixo do peso ideal.")
elif IMC >= 20 and IMC < 25: #elif IMC <= 25: , se fosse apenas isso, daria certo de qualquer jeito
    print("Seu IMC está entre 20 e 25. Parabéns! Você está no peso ideal.")
elif IMC >= 25 and IMC < 30: #elif IMC <= 30:
    print("Seu IMC está entre 25 e 30. Você está sobre o peso ideal.")
elif IMC >= 30 and IMC < 40: #elif IMC <= 40:
    print("Seu IMC está entre 30 e 40. Você está obeso, cuide-se.")
elif IMC >= 40: #podia ser apenas else:
    print("Seu IMC é maior que 40. Você é um obeso mórbido, procure um médico e cuide-se.")
