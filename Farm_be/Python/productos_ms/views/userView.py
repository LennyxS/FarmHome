from django.shortcuts import render
from rest_framework import generics
from productos_ms.serializers import UserSerializer
from productos_ms.models import User
# Create your views here.

class UserListView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()