import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class DeleteOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const orderExists = await this.ordersRepository.findById(id);

    if (!orderExists) {
      throw new AppError('Order does not exists!', 404);
    }

    await this.ordersRepository.deleteById(id);
  }
}

export { DeleteOrderUseCase };
