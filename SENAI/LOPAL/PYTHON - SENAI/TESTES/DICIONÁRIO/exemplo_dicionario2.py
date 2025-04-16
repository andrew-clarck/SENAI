#-*- coding: UTF-8 -*-
"""
Exemplo: Acesso a uma chave inexistente.
"""
"""
tabela = {"Alface": 0.45,
"Batata": 1.20,
"Tomate": 2.30,
"Feijão": 1.50}

print(tabela["Manga"]) #Mensagem: KeyError
"""

"""
Exemplo 19: Verificação da existência de uma chave.
"""

tabela = {"Alface": 0.45,
"Batata": 1.20,
"Tomate": 2.30,
"Feijão": 1.50}

print("Manga" in tabela) #False
print("Batata" in tabela) #True
