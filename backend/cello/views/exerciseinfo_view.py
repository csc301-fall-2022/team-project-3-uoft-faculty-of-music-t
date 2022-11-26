# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo, Book, Tag
from collections import defaultdict
from django.db.models import Q
from drf_yasg.utils import swagger_auto_schema
from .documentation import exercise_filter_parameters

# http://127.0.0.1:8000/api/exerciseinfo/?&tag_id=18&author=Bukinik,%20Mikhail&book_id=27
# http://127.0.0.1:8000/api/exerciseinfo/?&tag_id=18&tag_id=12&author=Bukinik,%20Mikhail&book_id=27&book_id=18&author=Raynal,%20Adrien
class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    @swagger_auto_schema(manual_parameters=exercise_filter_parameters, operation_id="Get exercises", operation_description="Returns all exercise that matches filter/search parameters (paginated).")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    @swagger_auto_schema(operation_id="Get exercise information", operation_description="Get the information for exercise with id")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(self, request, *args, **kwargs)

    def get_queryset(self):

        tag_id = self.request.query_params.getlist('tag_id')
        author = self.request.query_params.getlist('author')
        book_id = self.request.query_params.getlist('book_id')
        side = self.request.query_params.getlist('side')
        clef = self.request.query_params.getlist('clef')
        search = self.request.query_params.get('search')


        exercises = ExerciseInfo.objects.all()

        if author:
            if book_id:
                books = Book.objects.filter(Q(id__in=book_id) | Q(author__in=author))
            else:
                books = Book.objects.filter(author__in=author)
        else:
            if book_id:
                books = Book.objects.filter(id__in=book_id)
            else:
                books = Book.objects.all()

        # Searches to find a match for the search term within author, tag name, exercise name, and book name
        if search:
            # Book title match
            book_title_matches = Book.objects.filter(title__icontains=search)
            # Author match
            author_matches = Book.objects.filter(author__icontains=search)
            # Exercise title match
            exercise_title_match = ExerciseInfo.objects.filter(page_and_exercise__icontains=search)
            # Tag name match
            tag_matches = Tag.objects.filter(tag_name__icontains=search)
            queryset = queryset.filter(Q(book_id__in=book_title_matches) | Q(book_id__in=author_matches) | \
                Q(tags__in=tag_matches) | Q(id__in=exercise_title_match))
        else:
            queryset = ExerciseInfo.objects.filter(id__in=exercises, book_id__in=books)
        
        if tag_id:
            for tag in tag_id:
                queryset = queryset.filter(tags=tag)

        if side:
            sides = []

            if 'left' in side:
                sides.append("Left Side")
            if 'right' in side:
                sides.append("Right Side")
            if 'other' in side:
                sides.append("Other")

            queryset = queryset.filter(side__in=sides)

        if clef:
            if 'treble' in clef and 'tenor' in clef:
                queryset = queryset.filter(Q(treble=True) | Q(tenor=True))
            elif 'treble' in clef:
                queryset = queryset.filter(treble=True)
            elif 'tenor' in clef:
                queryset = queryset.filter(tenor=True)       

        return queryset
