import math
# Connector to MongoDB
from Connector import connector

# ListA = [85, 80, 83, 70, 81, 65, 64, 72, 69, 75, 75, 72, 81, 71]
# ListB = [85, 90, 86, 96, 80, 70, 65, 95, 70, 80, 70, 81, 75, 91]

ListA = []
ListB = []

document = connector.collection('automobile').find({'status':True})
for item in document:
    ListA.append(int(item['year']))
print(ListA)

document = connector.collection('automobile').find({'status':True})
for item in document:
    ListB.append(int(item['cilinder']))
print(ListB)

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

def Sumatoria(A, B, MA, MB):
    i = 0
    Suma = 0
    while i < len(A):
        Suma += ((A[i] - MA) * (B[i] - MB))
        i += 1
    return Suma

# z-score
def z_score(List):
    media = Media(List)
    desvi = DesviacionEstandar(List, media)
    temp = []
    for elemento in List:
        temp.append((elemento - media) / desvi)
    print(temp)
    List = temp

z_score(ListA)
z_score(ListB)
MedianaListA = Media(ListA)
MedianaListB = Media(ListB)

Suma = Sumatoria(ListA, ListB, MedianaListA, MedianaListB)

DesListA = DesviacionEstandar(ListA, MedianaListA)
DesListB = DesviacionEstandar(ListB, MedianaListB)

valor = len(ListB) * DesListA * DesListB

print(Suma / valor)