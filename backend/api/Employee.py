# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Employee(Resource):

    def post(self):
        try:
            data = request.json
            connector.collection('employee').insert_one(data)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})
    
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
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})

class EmployeeParams(Resource):
    
    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('employee').update_one(where, value)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})
    
    def put(self, id):
        try:
            data = request.json
            where = {'_id':ObjectId(id)}
            value = {'$set':{'name':data['name'],
                            'address':data['address'],
                            'nss':data['phone'],
                            'rfc':data['rfc'],
                            'curp':data['curp'],
                            'phone':data['phone'],
                            'email':data['email'],
                            'birthDate':data['birthDate'],
                            'salary':data['salary'],
                            'role':data['role']}}
            connector.collection('employee').update_one(where, value)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})
    
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
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})