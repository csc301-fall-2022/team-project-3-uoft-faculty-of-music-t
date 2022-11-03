release: python backend/manage.py migrate
web: sh -c 'cd ./mysite/ && exec gunicorn backend.wsgi --log-file -'