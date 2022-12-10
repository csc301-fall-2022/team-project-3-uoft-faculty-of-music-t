# API endpoints here begin with /api/tag
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import TagSerializer, SubtagSerializer
from ..models import Tag, ExerciseInfo, Subtag
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import ListAPIView

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all().order_by('id')
    # pagination_class = StandardResultsSetPagination
    pagination_class = None

    @swagger_auto_schema(operation_id="Get all tags", operation_description="Get all tags (paginated)")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    @swagger_auto_schema(operation_id="Get tag", operation_description="Get information for a tag with id")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(self, request, *args, **kwargs)

        
# /api/tag/exercise/<exercise_id>
class TagByExerciseView(viewsets.ModelViewSet):
    serializer_class = TagSerializer

    def get_queryset(self):
        tags = ExerciseInfo.objects.filter(exercise_id=self.kwargs['exercise_id']).values('tag_id',)
        queryset = Tag.objects.filter(id__in=tags)
        return queryset

    @swagger_auto_schema(operation_id="Get tags by exercise", operation_description="Get all tags associated with exercise id")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

# /api/tag/level/<level_num>
class TagByLevelView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    pagination_class = StandardResultsSetPagination

    @swagger_auto_schema(operation_id="Get tags by level number", operation_description="Get all tags that have level number level_num (paginated)")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    def get_queryset(self):
        level_num = self.kwargs['level_num']
        queryset = Tag.objects.filter(level=level_num).order_by('id')
        return queryset

# /api/tag/subtag/<tag_id>
# Gets all the subtags of <tag_id>
class SubtagView(viewsets.ModelViewSet):
    serializer_class = SubtagSerializer
    pagination_class = StandardResultsSetPagination

    @swagger_auto_schema(operation_id="Get subtags", operation_description="Get all subtags of tag with id (paginated)")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    def get_queryset(self):
        tag_id = self.kwargs['tag_id']
        queryset = Subtag.objects.filter(parent_id=tag_id)
        return queryset

class ExerciseRandomView(ListAPIView):

    serializer_class = TagSerializer
    pagination_class = StandardResultsSetPagination

    @swagger_auto_schema(operation_id="Get random tags", operation_description="Returns paginated list of tags in a random order")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    def get_queryset(self):

        return Tag.objects.all().order_by('?')