import Express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Note from '../Models/notesModel';

import { RequestWithUser } from '../interfaces/authInterface';
// import

// declare module "express-serve-static-core" {
//   interface Request {
//     userId?: string;
//   }
// }

//  @desc creates a new note
//  @route POST /api/notes/
//  @access private
const createNote = asyncHandler(async (req: RequestWithUser, res: Response) => {
  const { title, body } = req.body;

  const note = new Note({
    title,
    body,
    user: req?.user?._id,
  });
  const createdNote = await note.save();
  res.status(201).json(createdNote);
});

//  @desc gets all of a users notes
//  @route GET /api/notes/
//  @access private
const getUserNotes = asyncHandler(async (req: RequestWithUser, res) => {
  if (!req?.user?._id) {
    res.status(401);
    throw new Error('No user info');
  }
  const userNotes = await Note.find({ user: req?.user?._id });
  console.log(userNotes);
  res.status(201).json(userNotes);
});

//  @desc Deletes one note
//  @route DELETE /api/notes/:id
//  @access private
const deleteNote = asyncHandler(async (req: RequestWithUser, res) => {
  if (!req?.user?._id) {
    res.status(401);
    throw new Error('invalid user information');
  }

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('You dont have permission to do that');
  }
  await Note.findByIdAndDelete(note.id);

  res.status(201).json('note deleted');
});

//  @desc Updates one note
//  @route PUT /api/notes/:id
//  @access private
const updateNote = asyncHandler(async (req: RequestWithUser, res: Response) => {
  if (!req?.user?._id) {
    res.status(401);
    throw new Error('invalid user information');
  }
  res.status(201).json('hit update note');
  // payload should be the note id, body and title that we want to update note with
});

export { getUserNotes, createNote, deleteNote, updateNote };
