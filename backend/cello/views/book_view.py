from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from ..serializers import BookSerializer
from ..models import Book


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset= Book.objects.all()