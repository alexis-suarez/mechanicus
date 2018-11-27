# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Automobile(Resource):

    def post(self):
        try:
            data = request.json
            connector.collection('automobile').insert_one(data)
            response = {'message':'success', 'status':True}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self):
        try:
            document = connector.collection('automobile').find({'status':True})
            data = []
            for field in document:
                data.append({'':field['']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class AutomobileParams(Resource):

    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('automobile').update_one(where, value)
            response = {'message':'success', 'status':True}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})
    
    def put(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'client':data['client'],
                            'brand':data['brand'],
                            'model':data['model'],
                            'year':data['year'],
                            'milage':data['milage'],
                            'cilinder':data['cilinder'],
                            'colour':data['colour'],
                            'transmision':data['transmision']}}
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self, id):
        try:
            document = connector.collection('automobile').find_one({'client':id, 'status':True})
            data = {'id':str(document['_id']),
                    'client':document['client'],
                    'brand':document['brand'],
                    'model':document['model'],
                    'year':document['year'],
                    'milage':document['milage'],
                    'cilinder':document['cilinder'],
                    'colour':document['colour'],
                    'transmision':document['transmision'],
                    'status':document['status']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})