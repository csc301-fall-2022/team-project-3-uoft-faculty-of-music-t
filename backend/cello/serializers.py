from rest_framework import serializers
from .models import Book, Exercise, ExerciseInfo, Tag

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('book_id', 'title', 'author', 'date', 'link')


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('exercise_id', 'side', 'page_and_exercise', 'tenor', 'treble', 'bookID')


class ExerciseInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseInfo
        fields = ('exercise_id', 'tag_id')

    
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('tag_id', 'level', 'tag_name')

