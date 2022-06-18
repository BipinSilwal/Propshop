import express from 'express';
import dotenv from 'dotenv';
import product from './data/product.js ';
import dbConnection from './db/dbConnection.js';

dotenv.config({ path: 'backend/.env' });

dbConnection();

const app = express();

app.get('/home', (req, res) => {
  res.json(product);
});

app.get('/home/:id', (req, res) => {
  const prod = product.find((p) => p._id === req.params.id);
  res.json(prod);
});

app.listen(process.env.PORT, () => {
  console.log(
    `connected to port @ ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
