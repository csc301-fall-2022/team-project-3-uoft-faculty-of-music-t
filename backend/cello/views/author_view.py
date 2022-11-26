from rest_framework import viewsets
from ..models import Book
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from .documentation import author_list_response

class AuthorView(viewsets.ViewSet):

    @swagger_auto_schema(responses=author_list_response, operation_id="List of all authors", operation_description="Get list of authors")
    def list(self, request, format=None):
        return Response({
            "authors": Book.objects.values_list('author', flat=True).distinct()
        })