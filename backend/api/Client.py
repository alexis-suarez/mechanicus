# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Client(Resource):

    def post(self):
        try:
            data = request.json
            connector.collection('client').insert_one(data)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})

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
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})

class ClientParams(Resource):

    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('client').update_one(where, value)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})
    
    def put(self, id):
        try:
            data = request.json
            where = {'_id':ObjectId(id)}
            value = {'$set':{'name':data['name'],
                            'address':data['address'],
                            'rfc':data['rfc'],
                            'phone':data['phone'],
                            'email':data['email']}}
            connector.collection('client').update_one(where, value)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})

    def get(self, id):
        try:
            document = connector.collection('client').find_one({'_id':ObjectId(id)})
            data = {'id':str(document['_id']),
                             'name':document['name'],
                             'address':document['address'],
                             'rfc':document['rfc'],
                             'phone':document['phone'],
                             'email':document['email'],
                             'status':document['status']}
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})