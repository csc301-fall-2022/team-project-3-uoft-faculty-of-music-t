# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo


class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    queryset= ExerciseInfo.objects.all()
