
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import ProductService from '../services';

const router = Router();

router.get('/:productId', async (req, res) => {
    const product = await ProductService.getProduct(req.params.productId);
    return res.status(StatusCodes.OK).json(product);
});

router.get('/', async (req, res) => {
    const products = await ProductService.listProduct();
    return res.status(StatusCodes.OK).json(products);
});

export default router;
