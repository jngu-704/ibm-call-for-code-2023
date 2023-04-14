from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PowerplantSerializer, CitySerializer, CityWeatherMonthlyAverageSerializer
from .models import Powerplant, City, CityWeatherMonthlyAverage

# Create your views here.


class PowerplantView(viewsets.ModelViewSet):
    serializer_class = PowerplantSerializer
    queryset = Powerplant.objects.all()
    search_fields = ['country', 'primary_fuel']


class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
    search_fields = ['country', 'name']


class CityWeatherMonthlyAverageView(viewsets.ModelViewSet):
    serializer_class = CityWeatherMonthlyAverageSerializer
    queryset = CityWeatherMonthlyAverage.objects.all()
