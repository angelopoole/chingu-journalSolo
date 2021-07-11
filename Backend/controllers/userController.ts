import Express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { access } from 'fs';
// !template
//  @desc
//  @route
//  @access

//  @desc create new user in db
//  @route POST /api/users/
//  @access public
const registerUser = asyncHandler((req: Request, res: Response) => {
  try {
    res.send('registerUser');
  } catch (err) {
    console.log(err);
  }
});

// @desc test ping of server
// route get /api/users/test
// @access public
const getTest = asyncHandler((req: Request, res: Response) => {
  try {
    res.send('get that test bro');
  } catch (err) {
    console.error(err);
  }
});

export { registerUser, getTest };
