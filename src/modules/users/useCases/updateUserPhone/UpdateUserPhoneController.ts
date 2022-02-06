import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserPhoneUseCase } from './UpdateUserPhoneUseCase';

class UpdateUserPhoneController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { phone } = request.body;

    const updateUserPhoneUseCase = container.resolve(UpdateUserPhoneUseCase);

    const userUpdated = await updateUserPhoneUseCase.execute(
      id as string,
      phone,
    );

    return response.json(userUpdated);
  }
}

export { UpdateUserPhoneController };
