import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteOrderUseCase } from './DeleteOrderUseCase';

class DeleteOrderController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteOrderUseCase = container.resolve(DeleteOrderUseCase);

    await deleteOrderUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteOrderController };
