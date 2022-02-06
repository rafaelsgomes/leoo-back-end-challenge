import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { Order } from '../entities/Order';

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<void>;
  list(): Promise<Order[]>;
  findById(id: string): Promise<Order | undefined>;
  listByUserId(user_id: string): Promise<Order[]>;
  findUserByUserId(user_id: string): Promise<Order | undefined>;
  deleteById(id: string): Promise<void>;
  updateOrder(order: Order): Promise<void>;
}

export { IOrdersRepository };
