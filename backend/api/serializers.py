from rest_framework import serializers
from .models import Address

class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = {'id', 'street', 'suburb', 'city'}