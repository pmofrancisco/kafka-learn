import express from 'express';
import { sendTopicRouter } from './routes/send-topic';

const app = express();

app.use(sendTopicRouter);

export { app };
