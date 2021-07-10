import Express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

//  @desc
//  @route
//  @access
const registerUser = asyncHandler((req: Request, res: Response) => {
  try {
    res.send('registerUser');
  } catch (err) {
    console.log(err);
  }
});

const getTest = asyncHandler((req: Request, res: Response) => {
  try {
    res.send('get that test bro');
  } catch (err) {
    console.error(err);
  }
});

export { registerUser, getTest };
