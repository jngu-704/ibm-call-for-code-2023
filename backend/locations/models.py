from django.db import models

# Create your models here.


class Powerplant(models.Model):
    country = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    capacity_mw = models.DecimalField(max_digits=7, decimal_places=2)
    latitude = models.DecimalField(max_digits=6, decimal_places=4)
    longitude = models.DecimalField(max_digits=7, decimal_places=4)
    primary_fuel = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name
