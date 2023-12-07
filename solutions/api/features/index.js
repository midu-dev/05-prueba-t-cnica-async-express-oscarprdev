import { Router } from 'express';
import { getUserById, getUsers } from './get-users/get-users.controller.js';
import { postUsers } from './post-users/post-users.controller.js';
import { removeUserById } from './remove-users/remove-users.controller.js';
import { updateUser } from './update-users/update-users.controller.js';
import { patchUser } from './patch-users/patch-users.controller.js';

const usersRouter = Router();

usersRouter.get('/:id', getUserById);
usersRouter.get('/', getUsers);
usersRouter.post('/', postUsers);
usersRouter.delete('/:id', removeUserById);
usersRouter.put('/:id', updateUser);
usersRouter.patch('/:id', patchUser);

export default usersRouter;
