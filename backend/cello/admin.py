from django.contrib import admin
from .models import Exercise, ExerciseInfo, Tag, Book

# Register your models here.
admin.site.register(Exercise)
admin.site.register(ExerciseInfo)
admin.site.register(Tag)
admin.site.register(Book)

