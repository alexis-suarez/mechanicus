# Flask
from flask import jsonify, request
from flask_restful import Resource, reqparse

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Employee(Resource):

    def post(self):
        try:
            data = request.get_json(force=True)
            # data = request.json(force=True)
            connector.collection('employee').insert_one(data)
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})
    
    def get(self):
        try:
            document = connector.collection('employee').find({'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'name':field['name'],
                             'address':field['address'],
                             'nss':field['phone'],
                             'rfc':field['rfc'],
                             'curp':field['curp'],
                             'phone':field['phone'],
                             'email':field['email'],
                             'birthDate':field['birthDate'],
                             'salary':field['salary'],
                             'role':field['role'],
                             'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class EmployeeParams(Resource):
    
    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('employee').update_one(where, value)
            response = {'message':'success', 'status':True}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})
    
    def get(self, id):
        try:
            document = connector.collection('employee').find_one({'_id':ObjectId(id)})
            data = {'id':str(document['_id']),
                    'name':document['name'],
                    'address':document['address'],
                    'nss':document['phone'],
                    'rfc':document['rfc'],
                    'curp':document['curp'],
                    'phone':document['phone'],
                    'email':document['email'],
                    'birthDate':document['birthDate'],
                    'salary':document['salary'],
                    'role':document['role'],
                    'status':document['status']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})