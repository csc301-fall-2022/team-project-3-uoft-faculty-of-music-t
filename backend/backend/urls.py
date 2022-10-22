"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import path, include
from rest_framework import routers
from cello import views


router = routers.DefaultRouter()
router.register(r'exercise', views.ExerciseView, 'exercise')
router.register(r'exerciseinfo', views.ExerciseInfoView, 'exerciseinfo')
router.register(r'book', views.BookView, 'book')
router.register(r'tag', views.TagView, 'tag')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
