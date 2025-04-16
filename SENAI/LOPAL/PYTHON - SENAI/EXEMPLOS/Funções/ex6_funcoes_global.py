# -*- coding: UTF-8 -*-

a = 5 # variável global

def muda_e_imprime():
    global a # variável global - muda a variável global, mesmo estando dentro da função (só muda quando a função é chamada)
    a = 7
    print("a dentro da função: %d" % a)
    
print("a antes de mudar: %d" % a)
muda_e_imprime() #chama a função, mudando a variável
print("a depois de mudar: %d" % a)
