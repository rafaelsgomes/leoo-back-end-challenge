import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateOrderUseCase } from './CreateOrderUseCase';

class CreateOrderController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { item_description, item_quantity, item_price } = request.body;
    const { user_id } = request.params;
    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    await createOrderUseCase.execute({
      user_id,
      item_description,
      item_quantity,
      item_price,
    });

    return response.status(201).send();
  }
}

export { CreateOrderController };
