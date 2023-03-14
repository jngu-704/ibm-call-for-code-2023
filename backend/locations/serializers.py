from rest_framework import serializers
from .models import Powerplant


class PowerplantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powerplant
        fields = ('id', 'country', 'powerplant_name', 'capacity_mw',
                  'latitude', 'longitude', 'primary_fuel')
