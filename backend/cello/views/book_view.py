# API endpoints begin with /api/book
from rest_framework import viewsets
from ..serializers import BookSerializer
from ..models import Book
from cello.pagination import StandardResultsSetPagination
from drf_yasg.utils import swagger_auto_schema


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset= Book.objects.all().order_by('id')
    pagination_class = StandardResultsSetPagination
    
    # GET api/book
    @swagger_auto_schema(operation_id="Get all books", operation_description="Get all books (paginated)")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    # GET api/book/:id
    @swagger_auto_schema(operation_id="Get book", operation_description="Get information for a single book with id")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(self, request, *args, **kwargs)