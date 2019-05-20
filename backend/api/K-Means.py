# Flask
from flask import jsonify, request
from flask_restful import Resource

# Id for MongoDb
from bson.objectid import ObjectId

# Connector to MongoDB
from Connector import connector

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sb
from sklearn.cluster import KMeans
from sklearn.metrics import pairwise_distances_argmin_min

#matplotlib inline
from mpl_toolkits.mplot3d import Axes3D
plt.rcParams['figure.figsize'] = (16, 9)
plt.style.use('ggplot')

document = connector.collection('service').find({'status':True})
print(document)

# dataframe = pd.read_csv("analisis.csv")
# dataframe.head()
# dataframe.describe()

# print(dataframe.groupby('categoria').size())

# dataframe.drop(['categoria'],1).hist()
# plt.show()