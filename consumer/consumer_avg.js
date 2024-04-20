#!/usr/bin/env node

const Kafka = require('no-kafka');

var valueSum = 0;
var count = 1

// Cria uma instância do consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var value = parseInt(m.message.value.toString('utf8'));
		console.log('Received: ' + value)
        valueSum = valueSum + value;
		process.stdout.write('Avg: ');
        console.log(valueSum/count);
        count = count + 1;
    });
};

// Inscreve-se no topic
return consumer.init().then(function () {
    return consumer.subscribe('kafka-python-topic', data);
});
