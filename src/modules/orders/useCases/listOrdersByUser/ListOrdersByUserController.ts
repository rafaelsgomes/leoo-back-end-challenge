import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOrdersByUserUserCase } from './ListOrdersByUserUserCase';

class ListOrdersByUserController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const listOrdersByUserUserCase = container.resolve(
      ListOrdersByUserUserCase,
    );

    const orders = await listOrdersByUserUserCase.execute(user_id as string);

    return response.json(orders);
  }
}

export { ListOrdersByUserController };
