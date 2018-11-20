# Flask
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

# Resources
from Automobile import Automobile
from Client import Client, ClientOne
from Service import Service

# Flask Application and API
app = Flask(__name__)
api = Api(app)

# Access-Control-Allow-Origin
CORS(app)

# Adding Reources
# Automobile
api.add_resource(Automobile, '/api/automobile')
# Client
api.add_resource(Client, '/api/client')
# Service
api.add_resource(Service, '/api/service')

if __name__ == "__main__":
    app.run(debug=True)