import Router from 'express';
import authController from '@controllers/authController';
import userVerification from '@middlewares/verifyUser';
import { jwtVerification } from '@middlewares/virefyToken';
import user from '@/services/user.services';

const authRouter = Router();


authRouter.get('/refresh', jwtVerification, authController.refreshToken)
authRouter.post('/login', userVerification, authController.createToken)
authRouter.get('/logout', jwtVerification, authController.logout)
authRouter.post('/logout', userVerification, authController.logout)

export default authRouter;