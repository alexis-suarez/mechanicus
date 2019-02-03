# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Service(Resource):

    def post(self):
        try:
            data = request.json
            connector.collection('service').insert_one(data)
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self):
        try:
            document = connector.collection('service').find({'delived':True, 'finished':True,'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'auto':field['auto'],
                             'client':field['client'],
                             'employee':field['employee'],
                             'entreDate':field['entreDate'],
                             'endedDate':field['endedDate'],
                             'description':field['description'],
                             'delived':field['delived'],
                             'finished':field['finished'],
                             'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class ServiceParams(Resource):

    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('service').update_one(where, value)
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})
    
    def put(self, id):
        try:
            data = request.json
            where = {'_id':ObjectId(id)}
            value = {'$set':{'auto':data['auto'],
                            'employee':data['employee'],
                            'entreDate':data['entreDate'],
                            'endedDate':data['endedDate'],
                            'description':data['description']}}
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self, id):
        try:
            document = connector.collection('service').find_one({'_id':ObjectId(id)})
            data = {'id':str(document['_id']),
                    'auto':document['auto'],
                    'employee':document['employee'],
                    'entreDate':document['entreDate'],
                    'endedDate':document['endedDate'],
                    'description':document['description'],
                    'delived':field['delived'],
                    'finished':field['finished'],
                    'status':document['status']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class ServiceDeliver(Resource):
    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'delived':True}}
            connector.collection('service').update_one(where, value)
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})

class ServiceGetDeliver(Resource):

    def get(self):
        try:
            document = connector.collection('service').find({'delived':False, 'finished':True, 'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'auto':field['auto'],
                             'client':field['client'],
                             'employee':field['employee'],
                             'entreDate':field['entreDate'],
                             'endedDate':field['endedDate'],
                             'description':field['description'],
                             'delived':field['delived'],
                             'finished':field['finished'],
                             'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class ServiceFinish(Resource):
    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'finished':True}}
            connector.collection('service').update_one(where, value)
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})

class ServiceGetFinish(Resource):
    def get(self):
        try:
            document = connector.collection('service').find({'delived':False,'finished':False, 'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'auto':field['auto'],
                             'client':field['client'],
                             'employee':field['employee'],
                             'entreDate':field['entreDate'],
                             'endedDate':field['endedDate'],
                             'description':field['description'],
                             'delived':field['delived'],
                             'finished':field['finished'],
                             'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})