import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on http://localhost:${PORT}/`));