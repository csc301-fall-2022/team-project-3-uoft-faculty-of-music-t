from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from ..serializers import TagSerializer
from ..models import Tag

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()