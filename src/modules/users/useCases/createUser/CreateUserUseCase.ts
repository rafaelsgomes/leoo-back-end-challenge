import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ name, cpf, phone }: ICreateUserDTO): Promise<void> {
    if (cpf.toString().length < 11 || phone.toString().length < 11) {
      throw new AppError(
        'Invalid CPF or Phone they must have at least eleven digits!',
      );
    }
    const cpfAlreadyExists = await this.usersRepository.findByCPF(cpf);

    if (cpfAlreadyExists) {
      throw new AppError('CPF already exists!');
    }

    await this.usersRepository.create({ name, cpf, phone });
  }
}

export { CreateUserUseCase };
