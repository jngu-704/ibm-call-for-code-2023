from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PowerplantSerializer, CitySerializer
from .models import Powerplant, City

# Create your views here.


class PowerplantView(viewsets.ModelViewSet):
    serializer_class = PowerplantSerializer
    queryset = Powerplant.objects.all()
    search_fields = ['country', 'primary_fuel']


class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
    search_fields = ['country']
