# API endpoints here begin with /api/exercise
from rest_framework import viewsets
from ..serializers import ExerciseSerializer
from ..models import Exercise


class ExerciseView(viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset= Exercise.objects.all()