from MongoDB import MongoDB

# connector = MongoDB('192.168.15.10', 27017, 'test')
connector = MongoDB("mongodb://db-mechanicus:ytYV3N24bFosyvcC@db-argentum-shard-00-00-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-01-8pr3z.gcp.mongodb.net:27017,db-argentum-shard-00-02-8pr3z.gcp.mongodb.net:27017/db-mechanicus?ssl=true&replicaSet=DB-Argentum-shard-0&authSource=admin&retryWrites=true", 'db-mechanicus')
#connector.collection('User').insert_one(record)
document = connector.collection('address').find()

for field in document:
    print("Calle " + field['street'])
    print("----------------------------------------")