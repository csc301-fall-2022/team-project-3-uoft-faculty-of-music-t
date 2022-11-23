# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo, Book, Tag
from collections import defaultdict
from django.db.models import Q


class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):

        tag_id = self.request.query_params.getlist('tag_id')
        author = self.request.query_params.getlist('author')
        book_id = self.request.query_params.getlist('book_id')
        search = self.request.query_params.get('search')

        if tag_id:
            exercises = ExerciseInfo.objects.filter(tags__in=tag_id)
        else:
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

        queryset = ExerciseInfo.objects.filter(id__in=exercises, book_id__in=books)

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

        return queryset