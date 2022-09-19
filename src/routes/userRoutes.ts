import { Router } from 'express';
import { Auth } from '../middlewares/auth';

import * as UserController from '../controllers/userController';

const router = Router();

router.get('/user/new', UserController.newUser);
router.get('/user/list', UserController.listUser);
router.get('/user/login', UserController.loginUser);

router.post('/postuser', UserController.postUser);
router.post('/loginuser', UserController.login);

export default router;