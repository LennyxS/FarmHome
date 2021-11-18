from django.shortcuts import render
from rest_framework import generics
from productos_ms.serializers import RoleSerializer
from productos_ms.models import Role
# Create your views here.

class RoleListView(generics.ListCreateAPIView):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()

class RoleDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()