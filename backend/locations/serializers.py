from rest_framework import serializers
from .models import Powerplant, City


class PowerplantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powerplant
        fields = ('id', 'name', 'country', 'capacity_mw',
                  'latitude', 'longitude', 'primary_fuel')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name', 'country', 'latitude',
                  'longitude', 'population')
