import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateOrderUseCase } from './UpdateOrderUseCase';

class UpdateOrderController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { item_description, item_price, item_quantity } = request.body;

    const updateOrderUseCase = container.resolve(UpdateOrderUseCase);

    const orderUpdated = await updateOrderUseCase.execute({
      id,
      item_description,
      item_price,
      item_quantity,
    });

    return response.json(orderUpdated);
  }
}

export { UpdateOrderController };
