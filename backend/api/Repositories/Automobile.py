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
            data = request.json
            connector.collection('automobile').insert_one(data)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})

    def get(self):
        try:
            document = connector.collection('automobile').find({'status':True})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'client':field['client'],
                             'brand':field['brand'],
                             'model':field['model'],
                             'year':field['year'],
                             'milage':field['milage'],
                             'cilinder':field['cilinder'],
                             'colour':field['colour'],
                             'transmision':field['transmision'],
                             'status':field['status']})
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})

class AutomobileParams(Resource):

    def delete(self, id):
        try:
            where = {'_id':ObjectId(id)}
            value = {'$set':{'status':False}}
            connector.collection('automobile').update_one(where, value)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})
    
    def put(self, id):
        try:
            data = request.json
            where = {'_id':ObjectId(id)}
            value = {'$set':{'client':data['client'],
                            'brand':data['brand'],
                            'model':data['model'],
                            'year':data['year'],
                            'milage':data['milage'],
                            'cilinder':data['cilinder'],
                            'colour':data['colour'],
                            'transmision':data['transmision']}}
            connector.collection('automobile').update_one(where, value)
            return jsonify({'success':True, 'message':'success!'})
        except:
            return jsonify({'success':False, 'message':'error!'})

    def get(self, id):
        try:
            document = connector.collection('automobile').find({'client':id})
            data = []
            for field in document:
                data.append({'id':str(field['_id']),
                             'client':field['client'],
                             'brand':field['brand'],
                             'model':field['model'],
                             'year':field['year'],
                             'milage':field['milage'],
                             'cilinder':field['cilinder'],
                             'colour':field['colour'],
                             'transmision':field['transmision'],
                             'status':field['status']})
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})

class AutomobileOne(Resource):
    def get(self, id):
        try:
            document = connector.collection('automobile').find_one({'_id':ObjectId(id)})
            data = {'id':str(document['_id']),
                    'client':document['client'],
                    'brand':document['brand'],
                    'model':document['model'],
                    'year':document['year'],
                    'milage':document['milage'],
                    'cilinder':document['cilinder'],
                    'colour':document['colour'],
                    'transmision':document['transmision'],
                    'status':document['status']}
            response = {'success':True, 'message':'success!', 'data':data}
            return jsonify(response)
        except:
            return jsonify({'success':False, 'message':'error!'})