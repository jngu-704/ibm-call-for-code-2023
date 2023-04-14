import pandas as pd
from django.core.management import BaseCommand
from locations.models import CityWeatherMonthlyAverage


class Command(BaseCommand):
    def handle(self, *args, **options):
        fields = ['date', 'city',  'Latitude', 'Longitude',
                  'tavg', 'tmin', 'tmax', 'wdir', 'wspd']

        df = pd.read_csv('static/city_weather_data.csv', sep=',',
                         skipinitialspace=True, usecols=fields, low_memory=True)
        row_iter = df.iterrows()

        city_weather_monthly_average = [] * 12

        for index, row in row_iter:
            city_name = row['city']
            date = row['date'].split("-")

            city_weather_monthly_average.append(
                CityWeatherMonthlyAverage(
                    city=city_name,
                    month=date[1],
                    latitude=row['Latitude'],
                    longitude=row['Longitude'],

                ))

        CityWeatherMonthlyAverage.objects.bulk_create(
            city_weather_monthly_average)
        print("CSV data has been added to database")


# c to f = (temperature × 9/5) + 32
# kmh to mph = kmh / 1.609344

    # city = models.CharField(max_length=100)
    # month = models.IntegerField()
    # longitude = models.DecimalField(max_digits=7, decimal_places=4)
    # latitude = models.DecimalField(max_digits=6, decimal_places=4)
    # temperature_c_avg = models.DecimalField(max_digits=4, decimal_places=1)
    # temperature_c_min = models.DecimalField(max_digits=4, decimal_places=1)
    # temperature_c_max = models.DecimalField(max_digits=4, decimal_places=1)
    # wind_kph = models.DecimalField(max_digits=4, decimal_places=1)
    # number_of_sunny_days = models.IntegerField()
