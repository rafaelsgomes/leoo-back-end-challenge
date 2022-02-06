import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class UpdateUserPhoneUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute(id: string, phone: number): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!', 404);
    }

    if (!phone) {
      return user;
    }

    user.phone = phone;

    await this.usersRepository.updatePhone(user);

    return user;
  }
}

export { UpdateUserPhoneUseCase };
