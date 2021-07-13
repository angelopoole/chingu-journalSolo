import express from 'express';
import {
  registerUser,
  getTest,
  authUser,
  authUserWithToken,
} from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/test').get(getTest);
router.route('/login/token').get(protect, authUserWithToken);

export default router;
