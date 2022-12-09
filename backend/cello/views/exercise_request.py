# API endpoints begin with /api/requested
from rest_framework import viewsets
from ..serializers import EditExerciseRequestSerializer
from ..models import EditExerciseRequest, ExerciseInfo
from ..pagination import StandardResultsSetPagination
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema


class EditExerciseRequestView(viewsets.ModelViewSet):
    serializer_class = EditExerciseRequestSerializer
    pagination_class = StandardResultsSetPagination
    queryset = EditExerciseRequest.objects.all()

    @api_view(['POST'])
    def edit_request(self, request):
        serializer = EditExerciseRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


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

