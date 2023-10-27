build:
	- docker-compose build

exec:
	- docker-compose run npm exec

restart:
	-# docker-compose restart
	- docker-compose down
	- docker-compose up -d

up:
	- docker-compose up -d

down:
	- docker-compose down
