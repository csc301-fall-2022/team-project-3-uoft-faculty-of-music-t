from django.db import models

# Create your models here.
class Book(models.Model):
    author = models.CharField(max_length=150)
    date = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    link = models.URLField(max_length=200)


class ExerciseInfo(models.Model):
    side = models.CharField(max_length=50)
    page_and_exercise = models.CharField(null=True, max_length=100)
    tenor = models.BooleanField()
    treble = models.BooleanField()
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)


class Tag(models.Model):
    level = models.IntegerField()
    tag_name = models.CharField(max_length=150)


class Exercise(models.Model):
    exercise_id = models.ForeignKey(ExerciseInfo, on_delete=models.CASCADE)
    tag_id = models.ForeignKey(Tag, on_delete=models.CASCADE)


class Subtag(models.Model):
    parent_id = models.ForeignKey(Tag, on_delete=models.CASCADE, related_name='parent_id')
    child_id = models.ForeignKey(Tag, on_delete=models.CASCADE, related_name='child_id')
