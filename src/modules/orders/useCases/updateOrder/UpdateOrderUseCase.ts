import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { IUpdateOrderDTO } from '../../dtos/IUpdateOrderDTO';
import { Order } from '../../entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class UpdateOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}
  async execute({
    id,
    item_description,
    item_price,
    item_quantity,
  }: IUpdateOrderDTO): Promise<Order> {
    const order = await this.ordersRepository.findById(id as string);

    if (!order) {
      throw new AppError('Order does not exists!', 404);
    }

    if (!item_description || !item_price || !item_quantity) {
      throw new AppError('Inform the description, quantity and price');
    }

    order.item_description = item_description;
    order.item_price = item_price;
    order.item_quantity = item_quantity;
    order.total_value = item_price * item_quantity;

    await this.ordersRepository.updateOrder(order);

    return order;
  }
}

export { UpdateOrderUseCase };
