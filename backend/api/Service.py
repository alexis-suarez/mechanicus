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
            data = request.get_json(force=True)
            connector.collection('service').insert_one(data)
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})
    
    def delete(self):
        try:
            pass
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})
    
    def put(self):
        try:
            pass
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})
    
    def get(self, params):
        try:
            pass
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})
    
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
            pass
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})