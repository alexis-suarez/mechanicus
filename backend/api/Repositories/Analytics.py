# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

import math

class Analytics(Resource):
    def get(self):
        try:
            connector.collection('automobile').find({'status':True})
            return jsonify({'success':True, 'message':'success'})
        except:
            return jsonify({'success':False, 'message':'error!'})

class Transmision(Resource):
    def get(self):
        try:
            document = connector.collection('automobile').find({'status':True})
            brands = []
            data = []
            for item in document:
                if not self.in_list(brands, item['brand']):
                    brands.append(item['brand'])
            for item in brands:
                one = connector.collection('automobile').find({'brand':item, 'transmision':'Automatico'})
                two = connector.collection('automobile').find({'brand':item, 'transmision':'Automatizadas o secuenciales'})
                thr = connector.collection('automobile').find({'brand':item, 'transmision':'Automatizada de doble embrague'})
                fou = connector.collection('automobile').find({'brand':item, 'transmision':'CVT'})
                data.append({'data':[one.count(), two.count(), thr.count(), fou.count()],'label':item})
            return jsonify({'success':True, 'message':'success', 'data':data})
        except:
            return jsonify({'success':False, 'message':'error!'})

    def in_list(self, array, value):
        if value in array:
            return True
        else:
            return False

class AmountService(Resource):
    def get(self):
        try:
            document = connector.collection('service').find({'status':True})
            employee = []
            amount = []
            data = []
            for item in document:
                if not self.in_list(employee, item['employee']):
                    employee.append(item['employee'])
            for item in employee:
                get = connector.collection('service').find({'employee':item})
                amount.append(get.count())
            data.append({'data':amount})
            return jsonify({'success':True, 'message':'success', 'data':data, 'employee':employee})
        except:
            return jsonify({'success':False, 'message':'error!'})
    
    def in_list(self, array, value):
        if value in array:
            return True
        else:
            return False

class Correlation(Resource):
    def get(self):
        try:
            ListA = []
            ListB = []
            data = []

            document = connector.collection('automobile').find({'status':True})
            for item in document:
                ListA.append(int(item['year']))
            document = connector.collection('automobile').find({'status':True})
            for item in document:
                ListB.append(int(item['cilinder']))
            data.append(self.correlation(ListA, ListA))

            document = connector.collection('automobile').find({'status':True})
            for item in document:
                ListA.append(int(item['milage']))
            document = connector.collection('automobile').find({'status':True})
            for item in document:
                ListB.append(int(item['cilinder']))
            data.append(self.correlation(ListA, ListA))

            document = connector.collection('automobile').find({'status':True})
            for item in document:
                ListA.append(int(item['milage']))
            document = connector.collection('automobile').find({'status':True})
            for item in document:
                ListB.append(int(item['year']))
            data.append(self.correlation(ListA, ListA))
            label = ['Año-Cilindraje', 'Kilometraje-Cilindraje', 'Kilometraje-Año']
            return jsonify({'success':True, 'message':'success', 'data':data, 'label':label})
        except:
            return jsonify({'success':False, 'message':'error!'})

    def Media(self, Lista):
        Total = 0
        for Elemento in Lista:
            Total += Elemento
        return Total/len(Lista)

    def DesviacionEstandar(self, Lista, Media):
        i = 0
        Total = 0
        for Elemento in Lista:
            Total += math.pow((Elemento - Media), 2) / len(Lista)
        return math.sqrt(Total)

    def Sumatoria(self, A, B, MA, MB):
        i = 0
        Suma = 0
        while i < len(A):
            Suma += ((A[i] - MA) * (B[i] - MB))
            i += 1
        return Suma

    # z-score
    def z_score(self, List):
        media = self.Media(List)
        desvi = self.DesviacionEstandar(List, media)
        temp = []
        for elemento in List:
            temp.append((elemento - media) / desvi)
        List = temp
    
    def correlation(self, ListA, ListB):
        # self.z_score(ListA)
        # self.z_score(ListB)
        MedianaListA = self.Media(ListA)
        MedianaListB = self.Media(ListB)

        Suma = self.Sumatoria(ListA, ListB, MedianaListA, MedianaListB)

        DesListA = self.DesviacionEstandar(ListA, MedianaListA)
        DesListB = self.DesviacionEstandar(ListB, MedianaListB)

        valor = len(ListB) * DesListA * DesListB

        return (Suma / valor)