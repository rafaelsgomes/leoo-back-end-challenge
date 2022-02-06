import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findByCPF(cpf: number): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  deleteById(id: string): Promise<void>;
  updatePhone(user: User): Promise<void>;
}

export { IUsersRepository };
