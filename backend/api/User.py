# Flask
from flask import jsonify, request
from flask_restful import Resource, reqparse

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class User(Resource):

    def post(self):
        try:
            data = request.json
            connector.collection('user').insert_one(data)
            response = {'message':'success', 'status':True}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self):
        try:
            document = connector.collection('user').find({'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                            'username':field['username'],
                            'password':field['password'],
                            'role':field['role'],
                            'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class UserParams(Resource):

    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('user').update_one(where, value)
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})
    
    def put(self, id):
        try:
            data = request.json
            where = {'_id':ObjectId(id)}
            value = {'$set':{'username':data['username'],
                            'password':data['password'],
                            'role':data['role']}}
            connector.collection('user').update_one(where, value)
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})
    
    def get(self, id):
        try:
            document = connector.collection('user').find_one({'_id':ObjectId(id)})
            data = {'id':str(document['_id']),
                    'username':document['username'],
                    'password':document['password'],
                    'role':document['role'],
                    'status':document['status']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class UserLogin(Resource):

    def get(self, username, password):
        try:
            document = connector.collection('user').find_one({"username":username, "password":password, 'status':True})
            data = {'id':str(document['_id']),
                    'username':document['username'],
                    'password':document['password'],
                    'role':document['role'],
                    'status':document['status']}
            return jsonify({'message':'success', 'status':True, 'data':data})
        except:
            return jsonify({'message':'error', 'status':False})