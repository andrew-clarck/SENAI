#-*- coding: UTF-8 -*-

a = 5 # variável global

def muda_e_imprime():
    a = 7 # variável local
    print("a dentro da função: %d" % a)

# imprime o valor da variável global
print("a antes de mudar: %d" % a)

# imprime o valor da variável local
muda_e_imprime()

# imprime o valor da variável global
print("a depois de mudar: %d" % a)
