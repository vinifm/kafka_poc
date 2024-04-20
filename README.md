1. `docker-compose up -d` executa containers em segundo plano.
	- O Apache Zookeeper é um serviço centralizado para manter informações de configurações e nomenclaturas entre serviços distribuídos.
	O Kafka utiliza o Zookeeper para sincronizar as configurações entre diferentes clusters.
2. `docker-compose ps` verifica se serviços estão rodando.
3. `docker-compose logs zookeeper | grep -i binding` verifica logs do zookeeper.
4. `docker-compose logs kafka | grep -i started` verifica o serviço do kafka

- `python3 -m venv .venv` Cria o ambiente virtual
- `source .venv/bin/activate` ativa-o
- `pip3 install -r requirements.txt` instala as dependências
- `npm install no-kafka` instala o cliente kafka para Node.js

1. No ambiente virtual: `python3 producer/producer.py`
2. Em outro terminal: consumer/consumer_avg.js

## Recursos
- [Apache Kafka — Aprendendo na prática](https://medium.com/trainingcenter/apache-kafka-codifica%C3%A7%C3%A3o-na-pratica-9c6a4142a08f)
- [Kafka Docs Quickstart](https://kafka.apache.org/quickstart)
# kafka_poc
