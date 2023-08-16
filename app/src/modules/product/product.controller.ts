import { Router } from 'express';

const router = Router();

router.route('/')
      .get((_, res) => res.status(200).json({ message: 'Hello, Product!' }));

export default router;