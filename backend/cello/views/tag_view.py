# API endpoints here begin with /api/tag
from msilib.schema import ServiceInstall
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers import TagSerializer
from ..models import Tag

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer

    def get_queryset(self):
        queryset = Tag.objects.all()
        level = self.request.query_params.get('level')
        if level is not None:
            queryset = queryset.filter(level=level)
        return queryset
