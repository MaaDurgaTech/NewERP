# Generated by Django 3.2.2 on 2021-05-25 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0020_auto_20210525_1020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reception',
            name='created',
            field=models.DateField(null=True),
        ),
    ]
