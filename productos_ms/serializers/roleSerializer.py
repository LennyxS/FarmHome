from django.db.models import fields
from rest_framework import serializers
from productos_ms.models import Role

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id_role', 'role_name']