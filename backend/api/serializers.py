from rest_framework import routers, serializers, viewsets

from .models import *

# Serializers define the API representation.
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('street', 'number', 'suburb', 'city', 'state', 'zip')