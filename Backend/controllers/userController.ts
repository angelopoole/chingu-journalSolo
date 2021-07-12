import Express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../Models/userModel';
import { generateToken } from '../util/generateJWT';
// !template
//  @desc
//  @route
//  @access

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    console.log('authenticated');
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//  @desc create new user in db
//  @route POST /api/users/
//  @access public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

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
      token: generateToken(user._id),
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

export { registerUser, getTest, authUser };
