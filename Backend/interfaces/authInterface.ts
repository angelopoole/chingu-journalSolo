import { UserInterface } from '../interfaces/UserInterface';
import { Request } from 'express';
interface decodedSignature {
  userId: string;
  iat: number;
  exp: number;
}

interface RequestWithUser extends Request {
  user?: UserInterface;
}

export { decodedSignature, RequestWithUser };
