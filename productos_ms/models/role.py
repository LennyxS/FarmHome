from django.db import models
from django.db.models.base import Model

class Role(models.Model):
    id_role = models.BigAutoField(primary_key=True)
    role_name = models.CharField(max_length=20)