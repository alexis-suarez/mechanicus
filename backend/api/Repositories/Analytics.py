# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

class Analytics(Resource):

    def get(self):
        try:
            return jsonify({'success':True, 'message':'success'})
        except:
            return jsonify({'success':False, 'message';'error!'})