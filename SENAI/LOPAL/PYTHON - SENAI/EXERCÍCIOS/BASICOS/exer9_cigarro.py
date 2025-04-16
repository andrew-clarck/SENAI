#-*- coding: UTF-8 -*-
print("Olá, eu irei calcular o tempo de vida que você, fumante, perdeu ao fumar")
CD = int(input("Digite a quantidade de cigarros que você fumava por dia: "))
AF = float(input("Digite a quantidade de anos que você fumou: "))

# Quantidade de dias fumados
DF = AF * 365

# Quantos cigarros foram fumados
CF = CD * DF

# Tempo de vida perdido fumando
TP = CF * 0.0069 #10 minutos em dias: 10 / 1440 -> quantidade de minutos em um dia

#print("Essa é a estimativa de dias de vida perdidos por conta do fumo: ", TP)
print(f"Essa é a estimativa de dias de vida perdidos por conta do fumo: {TP:.2f}")
