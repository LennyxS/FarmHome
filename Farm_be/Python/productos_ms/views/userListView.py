from django.shortcuts import render
from rest_framework import generics
from productos_ms.serializers import UserSerializer
from productos_ms.models import User
from rest_framework                          import status, views
from rest_framework.response                 import Response
from rest_framework_simplejwt.serializers    import TokenObtainPairSerializer
# Create your views here.

class UserListView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()