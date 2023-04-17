from django.contrib import admin
from .models import Powerplant, City, CityWeatherYearlyAverage
# Register your models here.
admin.site.register(Powerplant)
admin.site.register(City)
admin.site.register(CityWeatherYearlyAverage)
