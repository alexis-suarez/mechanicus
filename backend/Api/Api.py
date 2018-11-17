# Flask
from flask import Flask, Response, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api

# Id for MongoDb
from bson.objectid import ObjectId

# Conexion for Mongodb Atlas
from MongoDB import MongoDB
connector = MongoDB("mongodb://db-mechanicus:ytYV3N24bFosyvcC@db-argentum-shard-00-00-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-01-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-02-8pr3z.gcp.mongodb.net:27017/db-mechanicus?ssl=true&replicaSet=DB-Argentum-shard-0&authSource=admin&retryWrites=true", 'db-mechanicus')

app = Flask('api', __name__)
api = Api(app)

CORS(app)
#
# Address Endpoint
#
@app.route('/address/view', methods=['GET'])
def address_view():
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
@app.route('/client/add')
def client_add(data):
    try:
        connector.collection('client').insert_one(jsonify(data))
        response = {'message':'success', 'status':True, 'data':jsonify(data)}
    except Exception as ex:
        return jsonify({'message':'error', 'status':False, 'exception':ex.message})

@app.route('/client/del')
def client_del():
    try:
        pass
    except Exception as ex:
        return jsonify({'message':'error', 'status':False, 'exception':ex.message})

@app.route('/client/upd')
def client_upd():
    try:
        pass
    except Exception as ex:
        return jsonify({'message':'error', 'status':False, 'exception':ex.message})

@app.route('client/get', methods=['GET'])
def client_get(id):
    try:
        document = connector.collection('client').find_one({'_id':ObjectId(id)})
        data = {'id':str(field['_id']), 'name':field['name'], 'rfc':field['rfc'], 'phone':field['phone']}
        response = {'message':'success', 'status':True, 'data':data}
        return jsonify(response)
    except Exception as ex:
        return jsonify({'message':'error', 'status':False, 'exception':ex.message})

@app.route('client/view', methods=['GET'])
def client_view():
    try:
        document = connector.collection('client').find()
        data = []
        for field in document:
            data.append({'id':str(field['_id']), 'name':field['name'], 'rfc':field['rfc'], 'phone':field['phone'], 'email':field['email']})
        response = {'message':'success', 'status':True, 'data':data}
        return jsonify(response)
    except Exception as ex:
        return jsonify({'message':'error', 'status':False, 'exception':ex.message})

# api.add_resourse()

if __name__ == "__main__":
    app.run(debug=True)