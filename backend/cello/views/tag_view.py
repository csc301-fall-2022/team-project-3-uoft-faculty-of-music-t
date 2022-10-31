# API endpoints here begin with /api/tag
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import TagSerializer
from ..models import Exercise, Tag

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()
    pagination_class = StandardResultsSetPagination

        
# /api/tag/exercise/<exercise_id>
class TagByExerciseView(viewsets.ModelViewSet):
    serializer_class = TagSerializer

    def get_queryset(self):
        tags = Exercise.objects.filter(exercise_id=self.kwargs['exercise_id']).values('tag_id',)
        queryset = Tag.objects.filter(id__in=tags)
        return queryset

# /api/tag/level/<level_num>
class TagByLevelView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        level_num = self.kwargs['level_num']
        queryset = Tag.objects.filter(level=level_num)
        return queryset
    