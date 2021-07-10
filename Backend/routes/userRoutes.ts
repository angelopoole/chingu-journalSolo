import { registerUser, getTest } from '../controllers/userController';

import express from 'express';
const router = express.Router();

router.route('/').post(registerUser);
router.route('/test').get(getTest);

export default router;
