from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PowerplantSerializer
from .models import Powerplant

# Create your views here.


class PowerplantView(viewsets.ModelViewSet):
    serializer_class = PowerplantSerializer
    queryset = Powerplant.objects.all()
