import { Router } from 'express';
import { CreateOrderController } from 'modules/orders/useCases/createOrder/CreateOrderController';
import { DeleteOrderController } from 'modules/orders/useCases/deleteOrder/DeleteOrderController';
import { ListOrdersController } from 'modules/orders/useCases/listOrders/ListOrdersController';
import { ListOrdersByUserController } from 'modules/orders/useCases/listOrdersByUser/ListOrdersByUserController';
import { UpdateOrderController } from 'modules/orders/useCases/updateOrder/UpdateOrderController';

const ordersRoutes = Router();

const listOrdersController = new ListOrdersController();
const listOrdersByUserController = new ListOrdersByUserController();
const createOrderController = new CreateOrderController();
const updateOrderController = new UpdateOrderController();
const deleteOrderController = new DeleteOrderController();

ordersRoutes.get('/list', listOrdersController.execute);
ordersRoutes.get('/user-orders/:user_id', listOrdersByUserController.execute);
ordersRoutes.post('/:user_id', createOrderController.execute);
ordersRoutes.put('/:id', updateOrderController.execute);
ordersRoutes.delete('/delete/:id', deleteOrderController.execute);

export { ordersRoutes };
