import { Router } from 'express';

import * as UserController from '../controllers/userController';

const router = Router();

router.get('/user/new', UserController.newUser)
router.get('/user/list', UserController.listUser)


router.post('/postuser', UserController.postUser)

export default router;