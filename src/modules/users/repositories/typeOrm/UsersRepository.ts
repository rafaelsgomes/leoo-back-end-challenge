import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ id, name, cpf, phone }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ id, name, cpf, phone });

    await this.repository.save(user);
  }
  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
  async findByCPF(cpf: number): Promise<User | undefined> {
    const user = await this.repository.findOne({ cpf });

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async updatePhone(user: User): Promise<void> {
    this.repository.merge(user);
    await this.repository.save(user);
  }
}

export { UsersRepository };
