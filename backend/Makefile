system-packages:
	apt update
	apt install python3-pip -y

python-packages:
	pip install -r requirements.txt

install: system-packages python-packages

run:
	python manage.py

db-upgrade:
	python -m flask db upgrade

db-downgrade:
	python -m flask db downgrade

init-db:
	python -m flask db init
	python -m flask db migrate --message 'initial database migration'
	make db-upgrade
