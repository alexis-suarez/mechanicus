# Flask
from flask import jsonify, request
from flask_restful import Resource, reqparse

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Service(Resource):

    def post(self):
        try:
            data = request.json
            connector.collection('service').insert_one(data)
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self):
        try:
            document = connector.collection('automobile').find({'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'auto':field['auto'],
                             'employee':field['employee'],
                             'entreDate':field['entreDate'],
                             'endedDate':field['endedDate'],
                             'description':field['description'],
                             'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class ServiceParams(Resource):

    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            response = {'message':'success', 'status':True}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})
    
    def put(self, id):
        try:
            response = {'message':'success', 'status':True}
            return jsonify(response)
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
                    'status':document['status']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})