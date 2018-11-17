import pymongo

from MongoDBCollection import MongoDBCollection

class MongoDB():

    def __init__(self, host, database):
        # Connection to MongoDB
        try:
            self._mongoClient = pymongo.MongoClient(host)
            self._database = self._mongoClient[database]
        except:
            raise Exception("Error!, trying to connect the " + database)

    # def __init__(self, host, port, database):
    #     # Connection to MongoDB
    #     try:
    #         self._mongoClient = pymongo.MongoClient(host, port)
    #         self._database = self._mongoClient[database]
    #     except:
    #         raise Exception("Error!, trying to connect the " + database)

    def collection(self, collection):
        try:
            return MongoDBCollection(self._database, collection)
        except:
            raise Exception("Error!, trying to access the collection " + collection)