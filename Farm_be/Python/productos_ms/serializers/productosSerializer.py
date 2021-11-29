from django.db.models import fields
from rest_framework import serializers
from productos_ms.models import Productos

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ['product_id', 'name', 'price', 'description', 'category', 'stock']