#!/bin/sh
exec su -m django_user -c "gunicorn --chdir /code/proyecto1 --bind 0.0.0.0:8000 proyecto1.wsgi:application"