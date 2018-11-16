import pymongo

class MongoDBCollection():
    
    def __init__(self, database, collection):
        # Set DataBase
        self._database = database
        
        # Set Collection
        self._collection = self._database[collection]

    def insert_one(self, object):
        try:
            self._collection.insert_one(object)
        except:
            raise Exception("Error!, trying to insert a document")

    def find_one(self, query):
        try:
            return self._collection.find_one(query)
        except:
            raise Exception("Error!, trying to find a document")

    def find(self):
        try:
            return self._collection.find()
        except:
            raise Exception("Error! trying to find all document")

    def update_one(self, object, query):
        try:
            self._collection.update_one(query)
        except:
            raise Exception("Error! trying to update a document")

    def delete_one(self, object, query):
        try:
            self._collection.delete_one(query)
        except:
            raise Exception("Error! trying to delete a document")