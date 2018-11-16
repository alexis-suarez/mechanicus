from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from api.views import *

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'address', AddressView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # path('api/', include('api.urls')),
]
