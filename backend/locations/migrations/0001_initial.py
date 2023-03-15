# Generated by Django 4.1.7 on 2023-03-14 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Powerplants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=100)),
                ('powerplant_name', models.CharField(max_length=255)),
                ('capacity_mw', models.DecimalField(decimal_places=2, max_digits=7)),
                ('latitude', models.DecimalField(decimal_places=4, max_digits=6)),
                ('longitude', models.DecimalField(decimal_places=4, max_digits=7)),
                ('primary_fuel', models.CharField(max_length=50)),
            ],
        ),
    ]