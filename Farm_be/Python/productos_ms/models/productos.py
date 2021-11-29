from django.db import models
from django.db.models.base import Model
from django.db.models.fields import BigAutoField
from productos_ms.models.category import Category
#from .choices import category

# Create your models here.


class Productos(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    name =  models.CharField(max_length=30)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=200)
    #category = models.CharField(max_length=20, choices=category, default='verdura')
    category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.CASCADE)
    stock = models.BooleanField(default=True)