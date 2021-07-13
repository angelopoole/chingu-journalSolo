import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware';
import { getUserNotes, createNote } from '../controllers/noteController';

router.route('/').get(protect, getUserNotes).post(protect, createNote);

export default router;
