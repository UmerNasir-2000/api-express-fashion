import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Teri maa ki' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT)
   .on('listening', () => console.log(`Server listening on http://localhost:${PORT}/`));