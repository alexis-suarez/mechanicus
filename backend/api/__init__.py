# Flask
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

# Resources
from Repositories.Automobile import Automobile, AutomobileParams, AutomobileOne
from Repositories.Client import Client, ClientParams
from Repositories.Employee import Employee, EmployeeParams
from Repositories.Service import Service, ServiceParams, ServiceDeliver, ServiceFinish
from Repositories.User import User, UserParams, UserLogin
from Repositories.Analytics import Analytics

# Flask Application and API
app = Flask(__name__)
api = Api(app,  prefix='/api')

# Access-Control-Allow-Origin
CORS(app)

# Adding Reources
# Automobile
api.add_resource(Automobile, '/automobile')
api.add_resource(AutomobileParams, '/automobile/<string:id>')
api.add_resource(AutomobileOne, '/automobile/one/<string:id>')
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
api.add_resource(ServiceFinish, '/service/finish/<string:id>')
# User
api.add_resource(User, '/user')
api.add_resource(UserParams, '/user/<string:id>')
api.add_resource(UserLogin, '/user/chck/<string:username>/<string:password>')
# Analytics
api.add_resource(Analytics, '/analytics')

# Main fuction in debug Mode
if __name__ == "__main__":
    app.run()