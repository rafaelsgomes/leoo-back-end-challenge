import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { ICreateOrderDTO } from '../../dtos/ICreateOrderDTO';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class CreateOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({
    id,
    user_id,
    item_description,
    item_quantity,
    item_price,
  }: ICreateOrderDTO): Promise<void> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User does not exists!');
    }

    if (!item_quantity || !item_price) {
      throw new AppError('The quantity and price must be at least 1 !');
    }

    if (!item_description) {
      throw new AppError('The description must be filled!');
    }

    const total_value = item_price * item_quantity;

    await this.ordersRepository.create({
      id,
      user_id,
      item_description,
      item_quantity,
      item_price,
      total_value,
    });
  }
}

export { CreateOrderUseCase };
