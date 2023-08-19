import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import Logger from './lib/logger';
import setupRoutes from './routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ status: 'Alive' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT)
   .on('listening', () => {  
      setupRoutes(app)
      Logger.log(`Server listening on http://localhost:${PORT}/`)
   });