from django.db import models

# Create your models here.
class Book(models.Model):
    book_id = models.IntegerField(primary_key = True)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=150)
    date = models.DateField()
    link = models.URLField(max_length=200)


class ExerciseInfo(models.Model):
    exercise_id = models.IntegerField(primary_key = True)
    side = models.CharField(max_length=50)
    page_and_exercise = models.IntegerField()
    tenor = models.BooleanField()
    treble = models.BooleanField()
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)


class Tag(models.Model):
    tag_id = models.IntegerField(primary_key = True)
    level = models.IntegerField()
    tag_name = models.CharField(max_length=150)


class Exercise(models.Model):
    exercise_id = models.ForeignKey(ExerciseInfo, on_delete=models.CASCADE)
    tag_id = models.ForeignKey(Tag, on_delete=models.CASCADE)

