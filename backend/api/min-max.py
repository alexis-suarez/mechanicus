Lista = [200, 300, 400, 600, 100, 800, 350, 175]

min = 100
max = 800

new_min = -5
new_max = 7


for valor in Lista: 
    total = (((valor - min) / (max - min)) * (new_max - new_min)) + new_min
    print(total)