from MongoDB import MongoDB

connector = MongoDB('192.168.15.10', 27017, 'test')

#connector.collection('User').insert_one(record)
document = connector.collection('names').find()

for field in document:
    print("Nombre " + field['name'])
    print("----------------------------------------")