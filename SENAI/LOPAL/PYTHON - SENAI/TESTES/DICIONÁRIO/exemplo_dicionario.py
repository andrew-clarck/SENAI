# -*- coding: UTF-8 -*-
"""
Exemplo 17: Funcionamento do dicionário.
"""

tabela = {"Alface": 0.45,
"Batata": 1.20,
"Tomate": 2.30,
"Feijão": 1.50}
#Esquerda: Chave. Direita: Valor

print("Preço do tomate: ", tabela["Tomate"])
print(tabela)
tabela["Tomate"] = 2.50 #Mudança de valor de um item da tabela
print("Preço do tomate após mudança: ", tabela["Tomate"])
tabela["Cebola"] = 1.20 #Adição de um item na tabela
print(tabela)
