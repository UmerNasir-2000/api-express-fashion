
import { Router } from 'express';

const router = Router({ caseSensitive: true });

router.route('/')
      .get((req, res) => res.status(200).json({ products: [] })) 
      .post((req, res) => res.status(200).json({ success: true }))

export default router;