import {Router} from 'express';
import userController from '@controllers/userController'
import userVerification from '@middlewares/verifyUser';
import { jwtVerification } from '@middlewares/virefyToken';

const userRouter = Router();

// userroutes.get('/',userController.getUser);
//only admins can get all users or use a query params
userRouter.get('/', jwtVerification,userController.getAllUsers);


//getuser by that user, must have the jwt
userRouter.get('/me/', jwtVerification,userController.getMyAccount);

//anyone can make a new user
userRouter.post('/', userController.createUser);

//user himself and admin?
// userRouter.delete('/:id', userController.deleteUser);

export default userRouter;