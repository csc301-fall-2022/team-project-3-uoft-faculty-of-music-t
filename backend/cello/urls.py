from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cello.views.author_view import AuthorView
from cello.views.book_view import BookView
from cello.views.exerciseinfo_view import ExerciseInfoView, ExerciseRandomView
from cello.views.tag_view import TagView, TagByExerciseView, TagByLevelView, SubtagView
from cello.views.exercise_request import EditExerciseRequestView, edit, reject, EditApprovedView

from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView
)

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'exerciseinfo', ExerciseInfoView, 'exerciseinfo')
router.register(r'book', BookView, 'book')
router.register(r'tag', TagView, 'tag')
router.register(r'authors', AuthorView, 'authors')
router.register(r'requested', EditExerciseRequestView, 'requested')

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('tag/exercise/<int:exercise_id>/', TagByExerciseView.as_view({'get': 'list'}),
         name='tag-by-exercise'),
    path('tag/level/<int:level_num>/', TagByLevelView.as_view({'get': 'list'}),
         name='tag-by-level'),
    path('tag/subtag/<int:tag_id>/', SubtagView.as_view({'get': 'list'}, name='subtag-view')),
    path('exerciseinfo/exercises/random/', ExerciseRandomView.as_view(), name='exercises-random'),
    path('tag/tags/random/', ExerciseRandomView.as_view(), name='exercises-random'),
    path('requested/approve/<int:request_id>/', edit, name='approve'),
    path('requested/reject/<int:request_id>/', reject, name='reject'),
    path('requested/exercises/approved/', EditApprovedView.as_view({'get': 'list'}, name='edit-approved'))
]
