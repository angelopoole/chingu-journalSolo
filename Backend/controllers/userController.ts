import Express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../Models/userModel';
// !template
//  @desc
//  @route
//  @access

//  @desc create new user in db
//  @route POST /api/users/
//  @access public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  console.log(req);
  const { name, email, password } = req.body;

  const userExists = User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc test ping of server
// route get /api/users/test
// @access public
const getTest = asyncHandler(async (req: Request, res: Response) => {
  try {
    res.send('get that test bro');
  } catch (err) {
    console.error(err);
  }
});

export { registerUser, getTest };
