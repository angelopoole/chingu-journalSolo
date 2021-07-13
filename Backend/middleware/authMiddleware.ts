import { Express, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../Models/userModel';
import asyncHandler from 'express-async-handler';
import { decodedSignature, RequestWithUser } from '../interfaces/authInterface';

// protect will see if they have a token. if they do it will decode the token, with the decoded token it will then grab the user using the decodec token(_id) and return the user, we then call next
const protect = asyncHandler(
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];
        console.log(`${token}`.cyan.bold);
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);

        req.user = await User.findById(
          (decoded as decodedSignature).userId
        ).select('-password');
        console.log(req.user);
        next();
      } catch (error) {
        res.status(401);
        throw new Error('Unothorized, token refused.');
      }
    }

    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
    // req headder should have authorization, authorization should start with 'Bearer'

    // if req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    //grab token from bearer by splitting

    // if(r)
  }
);

export { protect };
