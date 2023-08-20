

import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { VendorService } from '../services';

const router = Router();

router.get('/:vendorId', async (req, res) => {
    const product = await VendorService.getVendor(req.params.vendorId);
    return res.status(StatusCodes.OK).json(product);
});

router.get('/', async (req, res) => {
    const products = await VendorService.listVendor();
    return res.status(StatusCodes.OK).json(products);
});

export default router;
