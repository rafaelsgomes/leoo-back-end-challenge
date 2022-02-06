import { getRepository, Repository } from 'typeorm';

import { ICreateOrderDTO } from '../../dtos/ICreateOrderDTO';
import { Order } from '../../entities/Order';
import { IOrdersRepository } from '../IOrdersRepository';

class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async create({
    id,
    user_id,
    item_description,
    item_quantity,
    item_price,
    total_value,
  }: ICreateOrderDTO): Promise<void> {
    const order = this.repository.create({
      id,
      user_id,
      item_description,
      item_quantity,
      item_price,
      total_value,
    });

    await this.repository.save(order);
  }
  async list(): Promise<Order[]> {
    const orders = await this.repository.find();

    return orders;
  }

  async listByUserId(user_id: string): Promise<Order[]> {
    const orders = await this.repository.find({ user_id });

    return orders;
  }

  async findById(id: string): Promise<Order | undefined> {
    const order = await this.repository.findOne(id);

    return order;
  }

  async findUserByUserId(user_id: string): Promise<Order | undefined> {
    const order = await this.repository.findOne({ user_id });

    return order;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async updateOrder(order: Order): Promise<void> {
    this.repository.merge(order);
    await this.repository.save(order);
  }
}

export { OrdersRepository };
