from rest_framework import serializers
from .models import Powerplant, City


class PowerplantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powerplant
        fields = "__all__"


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"
