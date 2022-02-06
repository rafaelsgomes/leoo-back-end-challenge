import { Router } from 'express';

import { ordersRoutes } from './orders.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/orders', ordersRoutes);

export { router };
