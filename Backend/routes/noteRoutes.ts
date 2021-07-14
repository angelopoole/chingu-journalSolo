import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware';
import {
  getUserNotes,
  createNote,
  deleteNote,
} from '../controllers/noteController';

router.route('/').get(protect, getUserNotes).post(protect, createNote);
router.route('/:id').delete(protect, deleteNote);

export default router;
