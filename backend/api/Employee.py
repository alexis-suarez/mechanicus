# Flask
from flask import jsonify, request
from flask_restful import Resource

# Connector to MongoDB
from Connector import connector

class Employee(Resource):
    def post(self):
        try:
            pass
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
            document = connector.collection('employee').find({'status':True})
            data = []
            for field in document:
                data.append({'':field['']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})