import pandas as pd
from django.core.management import BaseCommand
from locations.models import CityWeatherYearlyAverage


class Command(BaseCommand):
    def handle(self, *args, **options):
        fields = ['date', 'city',  'Latitude', 'Longitude',
                  'tavg', 'tmin', 'tmax', 'wspd']

        df = pd.read_csv('static/city_weather_data.csv', sep=',',
                         skipinitialspace=True, usecols=fields, low_memory=True)
        df = df.dropna() 
        row_iter = df.iterrows()
        df = df.reset_index(drop=True)

        city_weather_yearly_average = []

        avg_temps = []
        min_temps = []
        max_temps = []
        avg_winds = []

        city_name = ""

        for index, row in row_iter: 
            # print(row)
            if city_name != "" and city_name != row['city']:
                try: 
                    city_weather_yearly_average.append(
                        CityWeatherYearlyAverage(
                            city=city_name,
                            latitude=row['Latitude'],
                            longitude=row['Longitude'],
                            temperature_c_avg = sum(avg_temps)/len(avg_temps),
                            temperature_c_min = sum(min_temps)/len(min_temps),
                            temperature_c_max = sum(max_temps)/len(max_temps),
                            wind_kph = sum(avg_winds)/len(avg_winds),
                        ))
                except: 
                    print("row failed")


            else:
                
                # if row['tavg'] is not None and row['tmin'] is not None and row['tmax'] is not None and row['wspd'] is not None:
                avg_temps.append(float(row['tavg']))
                min_temps.append(float(row['tmin']))
                max_temps.append(float(row['tmax']))
                avg_winds.append(float(row['wspd']))

            city_name = row['city']
            


        CityWeatherYearlyAverage.objects.bulk_create(
            city_weather_yearly_average)
        print("CSV data has been added to database")


# c to f = (temperature × 9/5) + 32
# kmh to mph = kmh / 1.609344

    # city = models.CharField(max_length=100)
    # longitude = models.DecimalField(max_digits=7, decimal_places=4)
    # latitude = models.DecimalField(max_digits=6, decimal_places=4)
    # temperature_c_avg = models.DecimalField(max_digits=4, decimal_places=1)
    # temperature_c_min = models.DecimalField(max_digits=4, decimal_places=1)
    # temperature_c_max = models.DecimalField(max_digits=4, decimal_places=1)
    # wind_kph = models.DecimalField(max_digits=4, decimal_places=1)
    # number_of_sunny_days = models.IntegerField()
