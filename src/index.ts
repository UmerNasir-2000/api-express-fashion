import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import prisma from './db';

const app = express();

app.get('/', async (req, res) => res.status(200).json(await prisma.product.findMany()));

const PORT = process.env.PORT || 5000;

app.listen(PORT)
   .on('listening', () => console.log(`Server listening on http://localhost:${PORT}/`));