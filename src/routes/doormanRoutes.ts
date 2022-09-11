import { Router } from 'express';

import * as DoormanController from '../controllers/doormanController';

const router = Router();

router.get('/', DoormanController.index);
router.get('/doorman/new', DoormanController.newDoorman);
router.get('/doorman/list', DoormanController.listDoorman);
router.get('/doorman/update/:id', DoormanController.doorman);

router.post('/postdoorman', DoormanController.postDoorman);
router.post('/updatedoorman', DoormanController.updateDoorman);

router.get('/doorman/delete/:id', DoormanController.deleteDoorman);

export default router;