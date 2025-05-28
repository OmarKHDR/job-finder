import {Router} from 'express';
import userController from '@controllers/userController'


const userRouter = Router();

// userroutes.get('/',userController.getUser);
//only admins
userRouter.get('/',userController.getAllUsers);
//admins and user themself
userRouter.get('/:id', userController.getUser);

//anyone
userRouter.post('/',userController.createUser);

//user himself and admin?
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;