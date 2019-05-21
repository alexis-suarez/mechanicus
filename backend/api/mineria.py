import math

#A = [63, 67, 67, 37, 41, 56, 62, 57, 63, 53, 57, 56, 56]
#B = [233, 286, 229, 250, 204, 236, 268, 354, 254, 203, 192, 294, 256]

#tem = [83, 64, 72, 81, 70, 68, 65, 75, 71, 85, 80, 72, 69, 75]
#hum = [86, 65, 90, 75, 96, 80, 70, 80, 91, 85, 90, 95, 70, 70]

Temperatura = [85, 80, 83, 70, 81, 65, 64, 72, 69, 75, 75, 72, 81, 71]
Humedad = [85, 90, 86, 96, 80, 70, 65, 95, 70, 80, 70, 81, 75, 91]

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

MedianaTemperatura = Media(Temperatura)
MedianaHumedad = Media(Humedad)

Suma = Sumatoria(Temperatura, Humedad, MedianaTemperatura, MedianaHumedad)

DesTemperatura = DesviacionEstandar(Temperatura, MedianaTemperatura)
DesHumedad = DesviacionEstandar(Humedad, MedianaHumedad)

valor = len(Humedad) * DesTemperatura * DesHumedad

print("Correlación :D")
print(Suma / valor)