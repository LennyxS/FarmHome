from django.shortcuts import render
from rest_framework import generics
from productos_ms.serializers import ProductosSerializer
from productos_ms.models import Productos
# Create your views here.

class ProductosListView(generics.ListCreateAPIView):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()


class ProductosDetailNameView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()
    lookup_field = 'name'

class ProductosDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()