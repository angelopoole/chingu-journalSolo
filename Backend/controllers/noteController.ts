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

export { getUserNotes, createNote };
