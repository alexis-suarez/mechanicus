from django.db import models

# Create your models here.

class Address(models.Model):
    street = models.TextField()
    number = models.TextField()
    suburb = models.TextField()
    city = models.TextField()
    state = models.TextField()