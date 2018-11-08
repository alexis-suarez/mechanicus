from django.urls import path, include
from api.views import *

urlpatterns = [
    path('address', AddressList.as_view())
]
