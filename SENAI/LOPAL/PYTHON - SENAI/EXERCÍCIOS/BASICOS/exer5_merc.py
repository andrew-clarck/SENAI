#-*- coding: UTF-8 -*-
print("Olá, eu irei dizer o valor total que voce deverá pagar pelo produto, para isso, preciso do valor da mercadoria e o seu percentual de desconto.")
VM = float(input("Peço que coloque o valor da mercadoria: "))
PD = float(input("Agora, coloque o percentual de desconto: "))
VD = VM * PD / 100
print("Este é o valor do seu desconto: ", VD)
VT = VM - VD
print("Este é o valor que você deve pagar, já descontado: ",VT)
