import Express, { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

//  @desc
//  @route
//  @access
const registerUser = async (req: Request, res: Response) => {
  try {
    res.send('registerUser');
  } catch (err) {
    console.log(err);
  }
};

const getTest = async (req: Request, res: Response) => {
  try {
    res.send('get that test bro');
  } catch (err) {
    console.error(err);
  }
};

export { registerUser, getTest };
