"""FarmHouse URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic.base import View
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from productos_ms import views

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('verifyToken/', views.VerifyTokenView.as_view()),
    path('user/', views.UserCreateView.as_view()),
    path('user/list/', views.UserListView.as_view()),
    path('user/<int:pk>/', views.UserDetailView.as_view()),
    path('producto/', views.ProductosListView.as_view()),
    path('producto/<int:pk>/', views.ProductosDetailView.as_view()),
    path('productobyname/<str:name>/', views.ProductosDetailNameView.as_view()),
    path('category/', views.CategoryListView.as_view()),
    path('category/<int:pk>/', views.CategoryDetailView.as_view()),
    path('role/', views.RoleListView.as_view()),
    path('role/<int:pk>/', views.RoleDetailView.as_view()),
]
