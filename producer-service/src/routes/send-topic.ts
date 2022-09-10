import express from 'express';
import { Kafka } from 'kafkajs';

const router = express.Router();

router.post('/api/send-topic', async (req, res) => {
  const kafka = new Kafka({
    clientId: 'kafka-learn',
    brokers: ['localhost:9092'],
  });

  const producer = kafka.producer()

  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  });

  await producer.disconnect();

  res.send(true);
});

export { router as sendTopicRouter };
