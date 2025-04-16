# -*- coding: UTF-8 -*-
"""
Exemplo: Obtenção do preço com dicionário.
"""

tabela = {"Alface": 0.45,
"Batata": 1.20,
"Tomate": 2.30,
"Feijão": 1.50}

print("Esses são os produtos disponíveis: ") 
for x in tabela.keys():
    print(x)

while True:
    produto = input("Digite o nome do produto, fim para terminar: ")
    if produto == "fim":
        break

    if produto in tabela:
        print("Preço: %5.2f" % tabela[produto])

    else:   
        print("Produto não encontrado!")
