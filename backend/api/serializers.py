from rest_framework import routers, serializers, viewsets

from .models import *

# Serializers define the API representation.
class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = ('street', 'number', 'suburb', 'city', 'state', 'zip')