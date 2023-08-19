import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import setupRoutes from './routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ status: 'Alive' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT)
   .on('listening', () => {  
      setupRoutes(app)
      console.log(`Server listening on http://localhost:${PORT}/`)
   });