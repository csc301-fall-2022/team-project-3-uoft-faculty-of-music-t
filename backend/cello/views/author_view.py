from rest_framework import viewsets
from ..models import Book
from rest_framework.response import Response

class AuthorView(viewsets.ViewSet):
    def list(self, request, format=None):
        return Response({
            "authors": Book.objects.values_list('author', flat=True).distinct()
        })