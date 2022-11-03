release: python backend/manage.py migrate
web: sh -c 'cd ./backend/ && exec gunicorn backend.wsgi --log-file -'