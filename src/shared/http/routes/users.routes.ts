import { Router } from 'express';
import { CreateUserController } from 'modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from 'modules/users/useCases/deleteUser/DeleteUserController';
import { ListUsersController } from 'modules/users/useCases/listUsers/ListUsersController';
import { UpdateUserPhoneController } from 'modules/users/useCases/updateUserPhone/UpdateUserPhoneController';

const usersRoutes = Router();

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserPhoneController = new UpdateUserPhoneController();
const deleteUserController = new DeleteUserController();

usersRoutes.get('/list', listUsersController.execute);
usersRoutes.post('/', createUserController.execute);
usersRoutes.put('/:id', updateUserPhoneController.execute);
usersRoutes.delete('/delete/:id', deleteUserController.execute);

export { usersRoutes };
