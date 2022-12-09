# Generated by Django 4.1.2 on 2022-12-09 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cello', '0007_remove_editexerciserequest_new_link_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='editexerciserequest',
            name='status',
            field=models.IntegerField(choices=[(0, 'Pending'), (1, 'Approved'), (2, 'Rejected')], default=0),
            preserve_default=False,
        ),
    ]
