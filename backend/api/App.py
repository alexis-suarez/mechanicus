# Flask
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

# Resources
from Automobile import Automobile, AutomobileParams
from Client import Client, ClientParams
from Employee import Employee, EmployeeParams
from Service import Service, ServiceParams
# from User import User

# Flask Application and API
app = Flask(__name__)
api = Api(app)

# Access-Control-Allow-Origin
CORS(app)

# Adding Reources
# Automobile
api.add_resource(Automobile, '/api/automobile')
api.add_resource(AutomobileParams, '/api/automobile/<string:id>')
# Client
api.add_resource(Client, '/api/client')
api.add_resource(ClientParams, '/api/client/<string:id>')
# Employee
api.add_resource(Employee, '/api/employee')
api.add_resource(EmployeeParams, '/api/employee/<string:id>')
# Service
api.add_resource(Service, '/api/service')
api.add_resource(ServiceParams, '/api/service/<string:id>')
# User
# api.add_resource(User, '/api/user')
# api.add_resource(User, '/api/user/<string:params>')

if __name__ == "__main__":
    app.run(debug=True)