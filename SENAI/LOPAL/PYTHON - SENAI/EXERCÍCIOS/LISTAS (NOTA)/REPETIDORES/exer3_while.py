#-*- coding: UTF-8 -*-
"""
3 - Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de
21 anos. Total de pessoas com mais de 50 anos. O programa termina quando idade
for = -99.
"""

print("Esse programa irá lhe mostar a quantidade total de pessoas com menos de 21 anos e o total com mais de 50 anos. Você digitara as idades, e caso queira encerrar o programa, digite -99")

y = 1 #Ordem
i = 0
i21 = 0
i50 = 0

while True:
    i = int(input("Digite a %iº idade, ou digite -99 para sair: " % y))
    y = y + 1
    if i == -99:
        print("Você escolheu sair.")
        break
    if i >= 0 and i < 21:
        i21 = i21 + 1
    elif i >= 21 and i <=50:
        print("Essa idade não entrará em nenhum grupo.")
    elif i > 50 and i <= 140:
        i50 = i50 + 1
    else:
        print("Essa idade é inválida.")

print(f"O total de pessoas com menos de 21 anos é de {i21} pessoas e o total com mais de 50 é de {i50} pessoas.")
    
