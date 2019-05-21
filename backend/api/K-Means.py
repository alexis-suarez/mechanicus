# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

import math
import Orange

from sklearn.cluster import KMeans;
import pandas
import numpy

class KMeans():
    def __init__(self):
        self._class = []
        self._data = []
        self._document = connector.collection('automobile').find({'status':True})

    def get_data(self):
        for item in self._document:
            if not self.in_class(item['brand']):
                self._class.append(item['brand'])
        for item in self._document:
            self._data.append([item['brand'], item['model'], item['year'], item['milage'], item['cilinder'], item['transmision']])

    def in_class(self, value):
        if value in self._class:
            return True
        else:
            return False
    
    def get_class(self):
        print(self._class)
    
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

file = 'data.csv'
data = pandas.read_csv(file)
dataframe = pandas.DataFrame(data)

if __name__ == "__main__":
    mine = KMeans()
    mine.get_data()
    mine.get_class()

#python -m Orange.canvas