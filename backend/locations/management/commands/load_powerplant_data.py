import pandas as pd
from django.core.management import BaseCommand
from locations.models import Powerplant


class Command(BaseCommand):
    def handle(self, *args, **options):
        fields = ['country', 'name', 'capacity_mw',
                  'latitude', 'longitude', 'primary_fuel']
        df = pd.read_csv('static/global_power_plant_database.csv', sep=',',
                         skipinitialspace=True, usecols=fields, low_memory=True)
        row_iter = df.iterrows()
        powerplants = [
            Powerplant(
                name=row['name'],
                country=row['country'],
                capacity_mw=row['capacity_mw'],
                latitude=row['latitude'],
                longitude=row['longitude'],
                primary_fuel=row['primary_fuel']
            )
            for index, row in row_iter
        ]

        Powerplant.objects.bulk_create(powerplants)
        print("CSV data has been added to database")
