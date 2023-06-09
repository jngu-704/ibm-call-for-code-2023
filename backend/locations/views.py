from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PowerplantSerializer, CitySerializer, CityWeatherYearlyAverageSerializer
from .models import Powerplant, City, CityWeatherYearlyAverage

# Create your views here.


class PowerplantView(viewsets.ModelViewSet):
    serializer_class = PowerplantSerializer
    queryset = Powerplant.objects.all()
    search_fields = ['country', 'primary_fuel']


class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
    search_fields = ['country', 'name']


class CityWeatherYearlyAverageView(viewsets.ModelViewSet):
    serializer_class = CityWeatherYearlyAverageSerializer
    queryset = CityWeatherYearlyAverage.objects.all()
