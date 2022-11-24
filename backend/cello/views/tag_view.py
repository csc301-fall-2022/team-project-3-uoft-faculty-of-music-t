# API endpoints here begin with /api/tag
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import TagSerializer, SubtagSerializer
from ..models import Tag, ExerciseInfo, Subtag

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all().order_by('id')
    pagination_class = StandardResultsSetPagination

        
# /api/tag/exercise/<exercise_id>
class TagByExerciseView(viewsets.ModelViewSet):
    serializer_class = TagSerializer

    def get_queryset(self):
        tags = ExerciseInfo.objects.filter(exercise_id=self.kwargs['exercise_id']).values('tag_id',)
        queryset = Tag.objects.filter(id__in=tags)
        return queryset

# /api/tag/level/<level_num>
class TagByLevelView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        level_num = self.kwargs['level_num']
        queryset = Tag.objects.filter(level=level_num).order_by('id')
        return queryset

# /api/tag/subtag/<tag_id>
# Gets all the subtags of <tag_id>
class SubtagView(viewsets.ModelViewSet):
    serializer_class = SubtagSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        tag_id = self.kwargs['tag_id']
        queryset = Subtag.objects.filter(parent_id=tag_id)
        return queryset