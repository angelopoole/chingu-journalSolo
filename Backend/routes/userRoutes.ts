import express from 'express';
import { registerUser, getTest, authUser } from '../controllers/userController';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/test').get(getTest);

export default router;
