# API endpoints here begin with /api/exerciseinfo
from rest_framework import viewsets
from cello.pagination import StandardResultsSetPagination
from ..serializers import ExerciseInfoSerializer
from ..models import ExerciseInfo, Book, Tag, Exercise

# http://127.0.0.1:8000/api/exerciseinfo/?&tag_id=18&book_id=3&author=Bukinik,%20Mikhail
class ExerciseInfoView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):

        tag_id = self.request.query_params.get('tag_id')
        author = self.request.query_params.get('author')
        book_id = self.request.query_params.get('book_id')

        if tag_id:
            exercises = Exercise.objects.filter(tag_id__in=tag_id)
        else:
            exercises = Exercise.objects.all()
        if author:
            books = Book.objects.filter(author=author)
        else:
            books = Book.objects.all()
        if book_id:
            queryset = ExerciseInfo.objects.filter(id__in=exercises, book_id__in=books, book_id=book_id)
        else:
            queryset = ExerciseInfo.objects.filter(id__in=exercises, book_id__in=books)
        return queryset

# http://127.0.0.1:8000/api/exerciseinfo/author/Cossmann,%20Bernhard
class ExerciseByAuthorView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        books = Book.objects.filter(author=self.kwargs['author'])
        queryset = ExerciseInfo.objects.filter(book_id__in=books.all())
        return queryset

# http://127.0.0.1:8000/api/exerciseinfo/book/Studies%20for%20Developing%20Agility,%20Strength%20of%20Fingers%20and%20Purity%20of%20Intonation
class ExerciseByBookView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        books = Book.objects.filter(title=self.kwargs['title'])
        queryset = ExerciseInfo.objects.filter(book_id__in=books.all())
        return queryset


class ExerciseByTagLevelView(viewsets.ModelViewSet):
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        level_num = self.kwargs['level_num']
        tags = Tag.objects.filter(level=level_num)
        exercises = Exercise.objects.filter(tag_id__in=tags.all())
        queryset = ExerciseInfo.objects.filter(id__in=exercises.all())
        return queryset

# http://127.0.0.1:8000/api/exerciseinfo/tag/name_or/Neck%20Positions%20Only&Thumb%20Positions%20Only
class ExerciseByTagNameOrView(viewsets.ModelViewSet):
    """
    OR implementation for multiple tags
    """
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        tag_url = self.kwargs['tag_name']
        tag_names = tag_url.split('&')
        tags = Tag.objects.filter(tag_name__in=tag_names)
        exercises = Exercise.objects.filter(tag_id__in=tags.all())
        queryset = ExerciseInfo.objects.filter(id__in=exercises.all())
        return queryset


class ExerciseByFilterView(viewsets.ModelViewSet):
    """
    OR implementation for multiple tags
    """
    serializer_class = ExerciseInfoSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        filters = self.kwargs['filters']
        print(filters)
        filters_list = filters.split('&')
        queryset = ExerciseInfo.objects.all()
        for filter in filters_list:
            splitted = filter.split('=')
            if splitted[0] == 'tag_id':
                exercises = Exercise.objects.filter(tag_id=splitted[1])
                queryset2 = ExerciseInfo.objects.filter(id__in=exercises.all())
            elif splitted[0] == 'author':
                books = Book.objects.filter(author=splitted[1])
                queryset2 = ExerciseInfo.objects.filter(book_id__in=books.all())
            else: #elif splitted[0] == 'book_id':
                queryset2 = ExerciseInfo.objects.filter(book_id__in=splitted[1])
            queryset = queryset.intersect(queryset2)

        return queryset



