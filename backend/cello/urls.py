from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cello import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'exercise', views.ExerciseView, 'exercise')
router.register(r'exerciseinfo', views.ExerciseInfoView, 'exerciseinfo')
router.register(r'book', views.BookView, 'book')
router.register(r'tag', views.TagView, 'tag')

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]