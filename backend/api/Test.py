from MongoDB import MongoDB

# Id for MongoDb
from bson.objectid import ObjectId

# connector = MongoDB('192.168.15.10', 27017, 'test')
connector = MongoDB("mongodb://db-mechanicus:ytYV3N24bFosyvcC@db-argentum-shard-00-00-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-01-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-02-8pr3z.gcp.mongodb.net:27017/db-mechanicus?ssl=true&replicaSet=DB-Argentum-shard-0&authSource=admin&retryWrites=true", 'db-mechanicus')

document = connector.collection('employee').find({'status':True})

# print(document['name'])
for field in document:
    print(field['name'])
    print("----------------------------------------")