#-*- coding: UTF-8 -*-
salario = float(input("Me fale seu salário, e eu trarei ele com a porcentagem de aumento: "))
porc = float(input("Agora digite a porcentagem: "))
aumento = salario * porc / 100
print("Este é o seu aumento: ", aumento)
sal_aum = salario + aumento
print("Este é o seu salário com o aumento: ", sal_aum)
