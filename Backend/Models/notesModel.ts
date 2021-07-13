import mongoose, { Schema } from 'mongoose';
import User from './userModel';

const noteSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  title: { type: String, required: true },
  body: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
