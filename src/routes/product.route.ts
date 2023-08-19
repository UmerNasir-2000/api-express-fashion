
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import ProductService from '../services';

const router = Router();

router.get('/', async (req, res) => res.status(StatusCodes.OK).json(await ProductService.listProduct())) 
      
export default router;