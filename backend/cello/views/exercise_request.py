# API endpoints begin with /api/requested
from rest_framework import viewsets
from ..serializers import EditExerciseRequestSerializer
from ..models import EditExerciseRequest
from ..pagination import StandardResultsSetPagination
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema




class EditExerciseRequestView(viewsets.ModelViewSet):
    serializer_class = EditExerciseRequestSerializer
    pagination_class = StandardResultsSetPagination

    @swagger_auto_schema(operation_id="Get edit exercise request",
                         operation_description="Get all dit exercise requests")
    def list(self, request, *args, **kwargs):
        return super().list(self, request, *args, **kwargs)

    @swagger_auto_schema(operation_id="Get book",
                         operation_description="Get information for a single book with id")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(self, request, *args, **kwargs)

    # def edit(self, request):
    #     #     to_edit = EditExerciseRequestView.objects.get(id=)
    #     #     to_edit.save()

    @api_view(['GET', 'POST'])
    def edit_request(self, request):
        if request.method == 'GET':
            return EditExerciseRequest.objects.all()

        elif request.method == 'POST':
            serializer = EditExerciseRequestSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response()


