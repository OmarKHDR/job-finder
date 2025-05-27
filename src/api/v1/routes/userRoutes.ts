import {Router} from 'express';
import userController from '@controllers/userController'


const userRouter = Router();

// userroutes.get('/',userController.getUser);
userRouter.get('/',userController.getAllUsers);



userRouter.post('/',userController.createUser);


export default userRouter;