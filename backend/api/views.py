from rest_framework import generics
from .models import Address
from .serializers import AddressSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

class AddressList(generics.ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset,pk = self.kwargs['pk'])

        return obj