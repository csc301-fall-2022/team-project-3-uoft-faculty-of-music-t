# API endpoints begin with /api/book
from rest_framework import viewsets
from ..serializers import BookSerializer
from ..models import Book
from cello.pagination import StandardResultsSetPagination


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset= Book.objects.all()
    pagination_class = StandardResultsSetPagination
    