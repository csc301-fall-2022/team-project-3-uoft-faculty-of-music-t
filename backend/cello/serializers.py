from rest_framework import serializers
from .models import Book, ExerciseInfo, Tag, EditExerciseRequest

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'date', 'link')

    
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'level', 'tag_name')


class ExerciseInfoSerializer(serializers.ModelSerializer):
    book = BookSerializer(source='book_id', many=False, read_only=True)
    tag = TagSerializer(source='tags', many=True)

    class Meta:
        model = ExerciseInfo
        fields = ('id', 'side', 'page_and_exercise', 'tenor', 'treble', 'book_id', 'book', 'tag')

class EditExerciseRequestSerializer(serializers.ModelSerializer):
    exercise_info = ExerciseInfoSerializer(source='exercise_id', many=False)

    class Meta:
        model = EditExerciseRequest
        fields = ('id', 'exercise_id' 'exercise_info' 'new_side', 
                'new_page_and_exercise', 'new_tenor', 'new_treble', 'new_book_id', 'new_book')

