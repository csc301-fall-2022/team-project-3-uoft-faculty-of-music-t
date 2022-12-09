from django.db import models


# Create your models here.
class Book(models.Model):
    author = models.CharField(max_length=150)
    date = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    link = models.URLField(max_length=200)


class Tag(models.Model):
    level = models.IntegerField()
    tag_name = models.CharField(max_length=150)


class ExerciseInfo(models.Model):
    side = models.CharField(max_length=50)
    page_and_exercise = models.CharField(null=True, max_length=100)
    tenor = models.BooleanField()
    treble = models.BooleanField()
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, db_table='cello_exercise')


class Subtag(models.Model):
    parent_id = models.ForeignKey(Tag, on_delete=models.CASCADE, related_name='parent_id')
    child_id = models.ForeignKey(Tag, on_delete=models.CASCADE, related_name='child_id')


class EditExerciseRequest(models.Model):
    exercise_id = models.ForeignKey(ExerciseInfo, on_delete=models.CASCADE)
    new_side = models.CharField(max_length=50)
    new_page_and_exercise = models.CharField(null=True, max_length=100)
    new_tenor = models.BooleanField()
    new_treble = models.BooleanField()
    new_link = models.CharField(max_length=150, null=True)
    new_tags = models.ManyToManyField(Tag)
