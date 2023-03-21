from django.db import models

# Create your models here.


class Powerplant(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=3)
    capacity_mw = models.DecimalField(max_digits=7, decimal_places=2)
    longitude = models.DecimalField(max_digits=7, decimal_places=4)
    latitude = models.DecimalField(max_digits=6, decimal_places=4)
    primary_fuel = models.CharField(max_length=50)
    other_fuel1 = models.CharField(max_length=50)
    other_fuel2 = models.CharField(max_length=50)
    other_fuel3 = models.CharField(max_length=50)
    renewable = models.IntegerField()

    def __str__(self) -> str:
        return self.name


class City(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=3)
    longitude = models.DecimalField(max_digits=7, decimal_places=4)
    latitude = models.DecimalField(max_digits=6, decimal_places=4)
    population = models.CharField(max_length=9)

    def __str__(self) -> str:
        return self.name
