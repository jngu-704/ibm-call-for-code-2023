from rest_framework import serializers
from .models import Powerplant, City, CityWeatherMonthlyAverage


class PowerplantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powerplant
        fields = "__all__"


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"


class CityWeatherMonthlyAverageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CityWeatherMonthlyAverage
        fields = "__all__"
