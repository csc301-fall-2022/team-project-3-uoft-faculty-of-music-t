from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import BookSerializer, ExerciseSerializer, ExerciseInfoSerializer, TagSerializer
from .models import Book, ExerciseInfo, Exercise, Tag


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset= Book.objects.all()


class ExerciseView(viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset= Exercise.objects.all()


class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    queryset= ExerciseInfo.objects.all()

