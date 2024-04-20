import express from 'express';

import { register, login, deleteUser } from '../Controllers/auth_controller.js';

const router = express.Router();

router.post('/deleteuser', deleteUser);


router.post('/signup', register);

router.post('/login', login);

export default router;