from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cello.views.author_view import AuthorView
from cello.views.book_view import BookView
from cello.views.exercise_view import ExerciseView
from cello.views.exerciseinfo_view import ExerciseInfoView, ExerciseByAuthorView, \
    ExerciseByBookView, ExerciseByTagLevelView, ExerciseByTagNameOrView, ExerciseByFilterView
from cello.views.tag_view import TagView, TagByExerciseView, TagByLevelView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'exercise', ExerciseView, 'exercise')
router.register(r'exerciseinfo', ExerciseInfoView, 'exerciseinfo')
router.register(r'book', BookView, 'book')
router.register(r'tag', TagView, 'tag')
router.register(r'authors', AuthorView, 'authors')

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('tag/exercise/<int:exercise_id>', TagByExerciseView.as_view({'get': 'list'}),
         name='tag-by-exercise'),
    path('tag/level/<int:level_num>', TagByLevelView.as_view({'get': 'list'}), name='tag-by-level'),
    path('exerciseinfo/author/<str:author>', ExerciseByAuthorView.as_view({'get': 'list'}),  #we don't need these actually
         name='exercise-by-author'),
    path('exerciseinfo/book/<str:title>', ExerciseByBookView.as_view({'get': 'list'}),
         name='exercise-by-book'),
    path('exerciseinfo/tag/level/<int:level_num>', ExerciseByTagLevelView.as_view({'get': 'list'}),
         name='exercise-by-tag-level'),
    path('exerciseinfo/tag/name_or/<str:tag_name>',
         ExerciseByTagNameOrView.as_view({'get': 'list'}), name='exercise-by-tag-name')


]
