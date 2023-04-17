from rest_framework import serializers
from .models import Powerplant, City, CityWeatherYearlyAverage


class PowerplantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powerplant
        fields = "__all__"


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"


class CityWeatherYearlyAverageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CityWeatherYearlyAverage
        fields = "__all__"
