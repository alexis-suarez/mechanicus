# Flask
from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from flask_restful import Resource, Api

# Id for MongoDb
from bson.objectid import ObjectId

# Conexion for Mongodb Atlas
from MongoDB import MongoDB
connector = MongoDB("mongodb://db-mechanicus:ytYV3N24bFosyvcC@db-argentum-shard-00-00-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-01-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-02-8pr3z.gcp.mongodb.net:27017/db-mechanicus?ssl=true&replicaSet=DB-Argentum-shard-0&authSource=admin&retryWrites=true", 'db-mechanicus')

app = Flask(__name__)
api = Api(app)

CORS(app)
#
# Address Endpoint
#
class Address(Resource):
    def put(self):
        pass
    def get(self):
        try:
            document = connector.collection('address').find()
            data = []
            for field in document:
                data.append({'id':str(field['_id']), 'street':field['street'], 'number':field['number'], 'suburb':field['suburb'], 'state':field['state']})
            response = {
                'message':'success',
                'status':True,
                'data':data
            }
            return jsonify(response)
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})

#
# Client Endpoint
#
class Client(Resource):
    def post(self):
        try:
            data = request.get_json(force=True)
            print(data)
            connector.collection('client').insert_one(data)
            response = {'message':'success', 'status':True, 'data':data}
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

    def get(self, id):
        try:
            document = connector.collection('client').find_one({'_id':ObjectId(id)})
            data = {'id':str(field['_id']), 'name':field['name'], 'rfc':field['rfc'], 'phone':field['phone']}
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})

    def get(self):
        try:
            document = connector.collection('client').find()
            data = []
            for field in document:
                data.append({'id':str(field['_id']), 'name':field['name'], 'rfc':field['rfc'], 'phone':field['phone'], 'email':field['email']})
            response = {'message':'success', 'status':True, 'data':data}
            return jsonify(response)
        except Exception as ex:
            return jsonify({'message':'error', 'status':False, 'exception':ex.message})

api.add_resource(Address, '/api/address')
api.add_resource(Client, '/api/client')

if __name__ == "__main__":
    app.run(debug=True)