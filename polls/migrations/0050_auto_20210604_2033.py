# Generated by Django 3.2.2 on 2021-06-04 15:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0049_auto_20210603_2106'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addhostel',
            name='admission',
        ),
        migrations.AddField(
            model_name='admissions',
            name='addhostel',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='admissions', to='polls.addhostel'),
        ),
        migrations.AddField(
            model_name='admissions',
            name='addsection',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='admissions', to='polls.addsection'),
        ),
    ]
