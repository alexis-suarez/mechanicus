from flask import Flask, Response, jsonify
from bson.objectid import ObjectId
from MongoDB import MongoDB
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
connector = MongoDB("mongodb://db-mechanicus:ytYV3N24bFosyvcC@db-argentum-shard-00-00-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-01-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-02-8pr3z.gcp.mongodb.net:27017/db-mechanicus?ssl=true&replicaSet=DB-Argentum-shard-0&authSource=admin&retryWrites=true", 'db-mechanicus')

@app.route('/api/address/view', methods=['GET'])
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
    except:
        return jsonify({'message':'success', 'status':False, 'data':data})

@app.route('/api/client/view', methods=['GET'])
def client_view():
    try:
        document = connector.collection('client').find()
        data = []
        for field in document:
            data.append({'id':str(field['_id']), 'name':field['name'], 'rfc':field['rfc'], 'phone':field['phone']})
        response = {
            'message':'success',
            'status':True,
            'data':data
        }
        return jsonify(response)
    except expression as identifier:
        return jsonify({'message':'success', 'status':False, 'data':data})

if __name__ == "__main__":
    app.run(debug=True)