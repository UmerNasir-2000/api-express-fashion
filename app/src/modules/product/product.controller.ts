import { Router } from 'express';
import ProductService from './product.service';

const router = Router();

router.route('/')
      .get(async (_, res) => res.status(200).json(await ProductService.listProducts()));

export default router;