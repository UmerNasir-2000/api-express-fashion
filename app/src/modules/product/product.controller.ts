import { Router } from 'express';
import ProductService from './product.service';

const router = Router();

router.route('/')
      .get((_, res) => res.status(200).json(ProductService.listProducts()));

export default router;