# API endpoints begin with /api/book
from rest_framework import viewsets
from ..serializers import EditExerciseRequestSerializer
from ..models import EditExerciseRequest
from cello.pagination import StandardResultsSetPagination


class EditExerciseRequestView(viewsets.ModelViewSet):
    serializer_class = EditExerciseRequestSerializer
    queryset= EditExerciseRequest.objects.all().order_by('id')
    pagination_class = StandardResultsSetPagination
    