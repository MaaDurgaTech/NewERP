# Generated by Django 3.2.2 on 2021-06-01 06:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0042_auto_20210529_2035'),
    ]

    operations = [
        migrations.RenameField(
            model_name='income',
            old_name='incomeMode',
            new_name='incomemode',
        ),
    ]
