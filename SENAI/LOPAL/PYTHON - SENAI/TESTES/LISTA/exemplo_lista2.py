# -*- coding: UTF-8 -*-
"""
Método extend() prolonga a lista, adicionando no
fim todos os elementos de uma lista passada como
argumento.

Exemplo: Adição de elementos e listas.
"""


"""
L = ["a"]
L.append("b")
print (L)
L.extend(["c"])
print (L)
L.append(["d", "e"]) #Fica diferente de "extend", ficam na mesma posição, pois append suporta apenas um argumento (valor).
print (L)
L.extend(["f", "g", "h"])
print (L)


del L[0] #Deletar uma posição da lista
print(L)
"""

L = list(range(101))
print ("Sem remover: ", L)
del L[1:100] #Deletar uma fatia de posições
print ("Após remover uma fatia: ", L)
