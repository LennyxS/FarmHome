from django.shortcuts import render
from rest_framework import generics
from productos_ms.serializers import CategorySerializer
from productos_ms.models import Category
# Create your views here.

class CategoryListView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()