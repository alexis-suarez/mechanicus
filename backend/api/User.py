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
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})
    def delete(self, params):
        try:
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})
    def put(self, params):
        try:
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})
    def get(self, params):
        try:
            return jsonify({'message':'success', 'status':True})
        except:
            return jsonify({'message':'error', 'status':False})