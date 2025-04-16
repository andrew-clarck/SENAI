#-*- coding=UTF-8 -*-
idade = int(input("Diga-me sua idade e eu direi se você pode ou não votar: "))
if idade >= 18 and idade <= 60:
    print("Você deve votar")
if idade > 15 and idade < 18 or idade > 60:
    print("Você pode votar, mas não é obrigado")
if idade <= 15:
    print("Você não pode votar")

