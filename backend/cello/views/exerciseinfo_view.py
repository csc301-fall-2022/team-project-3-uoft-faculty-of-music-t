# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo


class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    queryset= ExerciseInfo.objects.all()
    pagination_class = StandardResultsSetPagination
