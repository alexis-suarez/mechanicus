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
            pass
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
            pass
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self, id):
        try:
            pass
        except:
            return jsonify({'message':'error', 'status':False})