#-*- coding: UTF-8 -*-
"""
Entrar com números enquanto forem positivos e
imprimir quantos números foram digitados.
"""

print("Entre com vários números positivos e eu direi quantos foram digitados quando o programa for encerrado, para encerrar o programa, digite um número negativo.")
N = 0 #Números digitados
X = 0 #Número digitado
Y = 1 #Ordem dos números
while True:
    X = float(input("Digite o  %i número, ou digite um número menor que 0, caso queira sair: " % Y))
    Y = Y + 1
    if X >= 0:
        print("Seu número é positivo, continue.")
        N = N + 1
    else:
        print("Você decidiu sair.")
        break
print("Você digitou %i números!" %N)
        
    
    
    
