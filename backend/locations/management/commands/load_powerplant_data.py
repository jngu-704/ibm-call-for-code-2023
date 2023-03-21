import pandas as pd
from django.core.management import BaseCommand
from locations.models import Powerplant


class Command(BaseCommand):
    def handle(self, *args, **options):
        fields = ['country', 'name', 'capacity_mw',
                  'latitude', 'longitude', 'primary_fuel',
                  'other_fuel1', 'other_fuel2', 'other_fuel3']
        df = pd.read_csv('static/global_power_plant_database.csv', sep=',',
                         skipinitialspace=True, usecols=fields, low_memory=False)
        row_iter = df.iterrows()

        def is_renewable(type):
            if type == "Biomass":
                return 1
            elif type == "Cogeneration":
                return 1
            elif type == "Geothermal":
                return 1
            elif type == "Hydro":
                return 1
            elif type == "Solar":
                return 1
            elif type == "Waste":
                return 1
            elif type == "Wave":
                return 1
            elif type == "Wind":
                return 1
            else:
                return 0

        powerplants = [
            Powerplant(
                name=row['name'],
                country=row['country'],
                capacity_mw=row['capacity_mw'],
                latitude=row['latitude'],
                longitude=row['longitude'],
                primary_fuel=row['primary_fuel'],
                other_fuel1=row['other_fuel1'],
                other_fuel2=row['other_fuel2'],
                other_fuel3=row['other_fuel3'],
                renewable=is_renewable(row['primary_fuel'])

            )
            for index, row in row_iter
        ]

        Powerplant.objects.bulk_create(powerplants)
        print("CSV data has been added to database")
