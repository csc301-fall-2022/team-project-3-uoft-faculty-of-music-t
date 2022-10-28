from rest_framework import serializers
from .models import Book, Exercise, ExerciseInfo, Tag

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'date', 'link')


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'exercise_id', 'tag_id')


class ExerciseInfoSerializer(serializers.ModelSerializer):
    book = BookSerializer(source='book_id', many=False, read_only=True)

    class Meta:
        model = ExerciseInfo
        fields = ('id', 'side', 'page_and_exercise', 'tenor', 'treble', 'book_id', 'book')

    
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'level', 'tag_name')
