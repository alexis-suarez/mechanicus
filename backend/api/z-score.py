import math

Lista = [200, 300, 400, 600, 100, 800, 350, 175]

def Media(Lista):
    Total = 0
    for Elemento in Lista:
        Total += Elemento
    return Total/len(Lista)

def DesviacionEstandar(Lista, Media):
    i = 0
    Total = 0
    for Elemento in Lista:
        Total += math.pow((Elemento - Media), 2) / len(Lista)
    return math.sqrt(Total)

media = Media(Lista)
desvi = DesviacionEstandar(Lista, media)

for elemento in Lista:
    print((elemento - media) / desvi)