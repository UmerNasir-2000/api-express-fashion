
import { Router } from 'express';
import ProductService from '../services';

const router = Router();

router.get('/', async (req, res) => res.status(200).json(await ProductService.listProduct())) 
      
export default router;