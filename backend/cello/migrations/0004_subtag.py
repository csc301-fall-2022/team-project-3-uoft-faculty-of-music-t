# Generated by Django 4.1.2 on 2022-11-18 04:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cello', '0003_alter_exerciseinfo_page_and_exercise'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subtag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='child_id', to='cello.tag')),
                ('parent_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parent_id', to='cello.tag')),
            ],
        ),
    ]