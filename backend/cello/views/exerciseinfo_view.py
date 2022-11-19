# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo, Book, Exercise
from django.db.models import Q

# http://127.0.0.1:8000/api/exerciseinfo/?&tag_id=18&author=Bukinik,%20Mikhail&book_id=27
# http://127.0.0.1:8000/api/exerciseinfo/?&tag_id=18&tag_id=12&author=Bukinik,%20Mikhail&book_id=27&book_id=18&author=Raynal,%20Adrien
class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):

        tag_id = self.request.query_params.getlist('tag_id')
        author = self.request.query_params.getlist('author')
        book_id = self.request.query_params.getlist('book_id')

        if tag_id:
            exercises = Exercise.objects.filter(tag_id__in=tag_id)
        else:
            exercises = Exercise.objects.all()
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
        return queryset




