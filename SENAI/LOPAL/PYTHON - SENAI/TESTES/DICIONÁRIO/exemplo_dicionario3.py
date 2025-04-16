# -*- coding: UTF-8 -*-
"""
Exemplo 20: Obtenção de uma lista de chaves e
valores.
"""

tabela = {"Alface": 0.45,
"Batata": 1.20,
"Tomate": 2.30,
"Feijão": 1.50}

#print(tabela.keys()) - fica feio, em forma de lista
for x in tabela.keys():
    print(x)

#print(tabela.values()) - fica feio, em forma de lista
for x in tabela.values():
    print(x)
