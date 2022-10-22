from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=150)
    date = models.DateField()
    link = models.URLField(max_length=200)


class ExerciseInfo(models.Model):
    side = models.CharField(max_length=50)
    pageAndExercise = models.IntegerField()
    tenor = models.BooleanField()
    treble = models.BooleanField()
    bookID = models.ForeignKey(Book, on_delete=models.CASCADE)


class Exercise(models.Model):
    exerciseID = models.ForeignKey(ExerciseInfo, on_delete=models.CASCADE)
    tagID = models.ForeignKey(Tag, on_delete=models.CASCADE)

class Tag(models.Model):
    level = models.IntegerField()
    tagName = models.CharField(max_length=150)
