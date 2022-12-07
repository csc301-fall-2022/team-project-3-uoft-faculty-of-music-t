# Generated by Django 4.1.2 on 2022-11-22 17:42

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
                ('side', models.CharField(max_length=20, null=False)),
                ('new_page_and_exercise', models.CharField(max_length=100, null=True)),
                ('link', models.CharField(max_length=150, null=True)),
                ('tags', models.TextField()),  # we have to convert list of tags to a string
                ('new_tenor', models.BooleanField()),
                ('new_treble', models.BooleanField()),
                ('exercise_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cello.exerciseinfo')),
                ('new_book_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cello.book')),
            ],
        ),
    ]
