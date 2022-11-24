from django.contrib import admin
from .models import ExerciseInfo, Tag, Book

# Register your models here.
admin.site.register(ExerciseInfo)
admin.site.register(Tag)
admin.site.register(Book)

