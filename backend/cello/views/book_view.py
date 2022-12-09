# API endpoints begin with /api/book
from rest_framework import viewsets
from ..serializers import BookSerializer
from ..models import Book
from cello.pagination import StandardResultsSetPagination
from drf_yasg.utils import swagger_auto_schema
from django.db.models import Q


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    pagination_class = StandardResultsSetPagination

    # GET api/book
    @swagger_auto_schema(operation_id="Get all books", operation_description="Get all books (paginated)")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    # GET api/book/:id
    @swagger_auto_schema(operation_id="Get book", operation_description="Get information for a single book with id")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(self, request, *args, **kwargs)

# http://127.0.0.1:8000/api/book/?author=Abbiate,%20Louis&link=https://imslp.org/wiki/Nouvelle_m%C3%A9thode_de_violoncelle_(Abbiate%2C_Louis)
    def get_queryset(self):

        author = self.request.query_params.getlist('author')
        title = self.request.query_params.getlist('title')
        date = self.request.query_params.getlist('date')

        queryset = Book.objects.all()

        if title:
            queryset = queryset.filter(title__in=title)
        if author:
            queryset = queryset.filter(author__in=author)
        if date:
            queryset = queryset.filter(date__in=date)

        return queryset
