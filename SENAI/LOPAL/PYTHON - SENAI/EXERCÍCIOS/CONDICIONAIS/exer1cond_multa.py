#-*- coding: UTF-8 -*-
"""
Escreva um programa que pergunte a velocidade do
carro de um usuário. Caso ultrapasse 80 km/h, exiba uma
mensagem dizendo que o usuário foi multado. Nesse
caso, exiba o valor da multa, cobrando R$ 5 por km acima
de 80 km/h.
"""

print("Olá, quero que me diga a velocidade em que você estava com o seu carro, se você ultrapassar o limite, irei multá-lo")
V = int(input("Digite a sua velocidade máxima alcançada: "))

if V > 80:
    print("Você será multado!")
    M = (V - 80) * 5
    print("Este é o valor de sua multa: R$%.2f" % M)
else:
    print("Você seguiu o limite, pode ir")

