# API endpoints begin with /api/requested
from rest_framework import viewsets
from ..serializers import EditExerciseRequestSerializer
from ..models import EditExerciseRequest, ExerciseInfo, Tag, Book
from ..pagination import StandardResultsSetPagination
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import AllowAny
from rest_framework.generics import ValidationError
import ast


class EditExerciseRequestView(viewsets.ModelViewSet):
    serializer_class = EditExerciseRequestSerializer
    pagination_class = StandardResultsSetPagination
    queryset = EditExerciseRequest.objects.all()
    permission_classes = [AllowAny]

    @swagger_auto_schema(operation_id="Create an exercise request", operation_description="Create an exercise request.")
    def create(self, request, *args, **kwargs):
        data = request.data
        keys = data.keys()

        if 'exercise_id' not in keys:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"exercise_id": "This field is required"})
        if 'new_side' not in keys:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"new_side": "This field is required"})
        if 'new_page_and_exercise' not in keys:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"new_page_and_exercise": "This field is required"})
        if 'new_book_id' not in keys:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"new_book_id": "This field is required"})

        exercise_id = ExerciseInfo.objects.get(id=data['exercise_id'])

        side = data['new_side']
        page_and_exercise = data['new_page_and_exercise']
        book_id = Book.objects.get(id=data['new_book_id'])

        tenor = True if 'new_tenor' in keys else False
        treble = True if 'new_tenor' in keys else False

        new_requested = EditExerciseRequest.objects.create(exercise_id=exercise_id,
                                                   new_side=side,
                                                   new_page_and_exercise=page_and_exercise,
                                                   new_tenor=tenor,
                                                   new_treble=treble,
                                                   new_book_id=book_id)
        if 'new_tags' in keys:
            # Convert tag payload into a list
            requested_tags = ast.literal_eval(data['new_tags'])
            for tag_id in requested_tags:
                tag = Tag.objects.get(id=tag_id)
                new_requested.new_tags.add(tag)
                new_requested.save()

        return Response({"message": "Successfully added request."})

    @swagger_auto_schema(operation_id="Get exercise requests", operation_description="Returns all exercise requests (paginated).")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    @swagger_auto_schema(operation_id="Get exercise request", operation_description="Returns exercise request with requested ID")
    def retrieve(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)


class ApproveEditExerciseRequestModel(viewsets.ModelViewSet):
    serializer_class = EditExerciseRequestSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        request_id = self.kwargs['request_id']
        queryset = EditExerciseRequest.objects.get(id=request_id)
        return queryset

    @api_view(['POST'])
    def edit(self):
        request_id = self.kwargs['request_id']
        # get the edit request with id = request_id
        edit_request = EditExerciseRequestView.objects.get(id=request_id)
        # find the exercise to be changed
        exercise_info = ExerciseInfo.objects.get(id=edit_request.exercise_id)

        # Edit the exercise info
        exercise_info.side = edit_request.new_side
        exercise_info.tenor = edit_request.new_tenor
        exercise_info.treble = edit_request.new_treble
        exercise_info.pageAndExercise = edit_request.new_page_and_exercise

        # Reset and then add the tags
        exercise_info.tag = None
        for tag in edit_request.new_tags:
            exercise_info.tags.add(tag)

        exercise_info.save()
        # delete the request from the database
        edit_request.delete()

    @swagger_auto_schema(operation_id="Approve edit exercise request",
                         operation_description="Approve edit exercise request with id")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)


class RejectEditExerciseRequestModel(viewsets.ModelViewSet):
    serializer_class = EditExerciseRequestSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        request_id = self.kwargs['request_id']
        queryset = EditExerciseRequest.objects.get(id=request_id)
        return queryset

    @api_view(['POST'])
    def delete_request(self):
        request_id = self.kwargs['request_id']
        edit_request = EditExerciseRequestView.objects.get(id=request_id)
        edit_request.delete()

    @swagger_auto_schema(operation_id="Reject edit exercise request",
                         operation_description="Reject edit exercise request with id")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

