import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { Order } from '../../entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class ListOrdersByUserUserCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute(user_id: string): Promise<Order[]> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 404);
    }

    const orders = await this.ordersRepository.listByUserId(user_id);

    return orders;
  }
}

export { ListOrdersByUserUserCase };
