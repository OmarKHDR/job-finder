import Router from 'express';
import authController from '@controllers/authController';
import userVerification from '@middlewares/verifyUser';
import { jwtVerification } from '@middlewares/virefyToken';
import user from '@/services/user.services';

const authRoutes = Router();


authRoutes.get('/refresh', jwtVerification, authController.refreshToken)
authRoutes.post('/login', userVerification, authController.createNewToken)