# API endpoints here begin with /api/tag
from rest_framework import viewsets
from ..serializers import TagSerializer
from ..models import Tag

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()