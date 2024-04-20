venv:
	python3 -m venv .venv

# Excluir os containers e volumes
down:
	docker-compose down -v --remove-orphans
