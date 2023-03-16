import pandas as pd
from django.core.management import BaseCommand
from locations.models import City


class Command(BaseCommand):
    def handle(self, *args, **options):
        fields = ['city_ascii', 'country', 'lat',
                  'lng', 'population']
        df = pd.read_csv('static/worldcities.csv', sep=',',
                         skipinitialspace=True, usecols=fields, low_memory=True)
        row_iter = df.iterrows()
        cities = [
            City(
                name=row['city_ascii'],
                country=row['country'],
                latitude=row['lat'],
                longitude=row['lng'],
                population=row['population'],
            )
            for index, row in row_iter
        ]

        City.objects.bulk_create(cities)
        print("CSV data has been added to database")
