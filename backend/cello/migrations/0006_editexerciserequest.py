# Generated by Django 4.1.2 on 2022-12-09 22:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cello', '0005_exerciseinfo_tags_delete_exercise'),
    ]

    operations = [
        migrations.CreateModel(
            name='EditExerciseRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('new_side', models.CharField(max_length=50)),
                ('new_page_and_exercise', models.CharField(max_length=100, null=True)),
                ('new_tenor', models.BooleanField()),
                ('new_treble', models.BooleanField()),
                ('status', models.IntegerField(choices=[(0, 'Pending'), (1, 'Approved'), (2, 'Rejected')])),
                ('exercise_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cello.exerciseinfo')),
                ('new_book_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cello.book')),
                ('new_tags', models.ManyToManyField(to='cello.tag')),
            ],
        ),
    ]
