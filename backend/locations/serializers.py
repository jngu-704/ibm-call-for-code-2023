from rest_framework import serializers
from .models import Powerplant, City, WeatherStation, WeatherStationMonthlyAverage


class PowerplantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powerplant
        fields = "__all__"


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"


class WeatherStationSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherStation
        fields = "__all__"


class WeatherStationMonthlyAverageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherStationMonthlyAverage
        fields = "__all__"
