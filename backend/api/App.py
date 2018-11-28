# Flask
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

# Resources
from Automobile import Automobile, AutomobileParams
from Client import Client, ClientParams
from Employee import Employee, EmployeeParams
from Service import Service, ServiceParams, ServiceDeliver, ServiceFinish, ServiceGetDeliver, ServiceGetFinish
from User import User, UserParams, UserLogin

# Flask Application and API
app = Flask(__name__)
api = Api(app,  prefix='/api')

# Access-Control-Allow-Origin
CORS(app)

# Adding Reources
# Automobile
api.add_resource(Automobile, '/automobile')
api.add_resource(AutomobileParams, '/automobile/<string:id>')
# Client
api.add_resource(Client, '/client')
api.add_resource(ClientParams, '/client/<string:id>')
# Employee
api.add_resource(Employee, '/employee')
api.add_resource(EmployeeParams, '/employee/<string:id>')
# Service
api.add_resource(Service, '/service')
api.add_resource(ServiceParams, '/service/<string:id>')
api.add_resource(ServiceDeliver, '/service/deliver/<string:id>')
api.add_resource(ServiceGetDeliver, '/service/deliver/')
api.add_resource(ServiceFinish, '/service/finish/<string:id>')
api.add_resource(ServiceGetFinish, '/service/finish/')

# User
api.add_resource(User, '/user')
api.add_resource(UserParams, '/user/<string:id>')
api.add_resource(UserLogin, '/user/chck/<string:username>/<string:password>')

# Main fuction in debug Mode
if __name__ == "__main__":
    app.run(debug=True)