# Flask
from flask import jsonify, request
from flask_restful import Resource, reqparse

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Client(Resource):
    def post(self):
        try:
            data = request.get_json(force=True)
            # data = request.json(force=True)
            connector.collection('client').insert_one(data)
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

    def delete(self):
        try:
            pass
        except:
            return jsonify({'message':'error', 'status':False})

    def put(self):
        try:
            pass
        except:
            return jsonify({'message':'error', 'status':False})

    def get(self):
        try:
            document = connector.collection('client').find({'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'name':field['name'],
                             'rfc':field['rfc'],
                             'phone':field['phone'],
                             'email':field['email'],
                             'status':field['status']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})

class ClientOne(Resource):
    def get(self, id):
        try:
            document = connector.collection('client').find_one({'_id':ObjectId(id)})
            data = {'id':str(document['_id']),
                             'name':document['name'],
                             'rfc':document['rfc'],
                             'phone':document['phone'],
                             'email':document['email'],
                             'status':document['status']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except:
            return jsonify({'message':'error', 'status':False})