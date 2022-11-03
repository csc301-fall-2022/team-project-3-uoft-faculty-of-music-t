# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo


class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    queryset= ExerciseInfo.objects.all().order_by('id')
    pagination_class = StandardResultsSetPagination

# /api/exerciseinfo/book/<book_id>
class ExerciseInfoByBookView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        book_id = self.kwargs['book_id']
        queryset = ExerciseInfo.objects.filter(book_id=book_id).order_by('id')
        return queryset
    