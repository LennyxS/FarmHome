from django.db.models import fields
from rest_framework import serializers
from productos_ms.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id_category', 'category_name']