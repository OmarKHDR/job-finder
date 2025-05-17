import {Router} from 'express';
import {userController} from '@controllers/userController'


const userroutes = Router();

userroutes.get('/',userController.getUser);

userroutes.post('/',userController.createUser);