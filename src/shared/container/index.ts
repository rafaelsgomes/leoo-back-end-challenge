import { container } from 'tsyringe';

import { IOrdersRepository } from '../../modules/orders/repositories/IOrdersRepository';
import { OrdersRepository } from '../../modules/orders/repositories/typeOrm/OrdersRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/typeOrm/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
