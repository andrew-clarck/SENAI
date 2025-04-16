#-*- coding: UTF-8
print("Olá, esse programa irá receber as temperaturas médias de cada mês do ano, ele irá mostrar a maior temperatura, a menor e a média de todas elas.")
temperaturas = []
y = 1
soma = 0

for x in range(0, 12):
    temp = float(input(f"Digite a temperatura média do {y}º mês: "))
    y += 1
    temperaturas.append(temp)
    soma += temp

media = soma / 12
temperaturas.sort()

print(f"Essas são todas as temperaturas, da ordem de menor para maior: {temperaturas}")
      
print(f"Essa é a menor temperatura: {temperaturas[0]}")
      
print(f"Essa é a maior temperatura: {temperaturas[-1]}")
      
print(f"Essa é a média de todas as temperaturas: {media}")
      
