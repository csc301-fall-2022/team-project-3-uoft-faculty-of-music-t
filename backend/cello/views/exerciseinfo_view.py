# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo
from collections import defaultdict


class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        queryset= ExerciseInfo.objects.all().order_by('id')
        return queryset