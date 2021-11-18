from django.db import models
from django.db.models.base import Model

class Category(models.Model):
    id_category = models.BigAutoField(primary_key=True)
    category_name = models.CharField(max_length=20)