import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './db/dbConnection.js';
import productRouter from './routes/productRoute.js';
import cors from 'cors';
import { errorMiddleware, notFound } from './middleware/errorMiddleware.js';
dotenv.config({ path: 'backend/.env' });

dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', productRouter);

app.use(notFound);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(
    `connected to port @ ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
