from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cello.views.author_view import AuthorView
from cello.views.book_view import BookView
from cello.views.exercise_view import ExerciseView
from cello.views.exerciseinfo_view import ExerciseInfoView
from cello.views.tag_view import TagView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'exercise', ExerciseView, 'exercise')
router.register(r'exerciseinfo', ExerciseInfoView, 'exerciseinfo')
router.register(r'book', BookView, 'book')
router.register(r'tag', TagView, 'tag')
router.register(r'authors', AuthorView, 'authors')

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]