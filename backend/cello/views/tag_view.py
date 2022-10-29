# API endpoints here begin with /api/tag
from rest_framework import viewsets
from ..serializers import TagSerializer
from ..models import Exercise, Tag

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    
    def get_queryset(self):
        queryset = Tag.objects.all()
        level = self.request.query_params.get('level')
        if level is not None:
            queryset = queryset.filter(level=level)
        return queryset
        
# /api/tag/exercise/<exercise_id>
class TagByExerciseView(viewsets.ModelViewSet):
    serializer_class = TagSerializer

    def get_queryset(self):
        tags = Exercise.objects.filter(exercise_id=self.kwargs['exercise_id']).values('tag_id',)
        queryset = Tag.objects.filter(id__in=tags)
        return queryset