import dotenv from 'dotenv';
dotenv.config();

import express from 'express';


import productRouter from './modules/product/product.controller';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/products/', productRouter)

app.get('/', (_, res) => res.status(200).json({ message: 'Hello, World!' }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`)
});