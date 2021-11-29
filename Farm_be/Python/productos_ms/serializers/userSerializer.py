from django.db.models import fields
from rest_framework import serializers
from productos_ms.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'name', 'lastname', 'role', 'email']
