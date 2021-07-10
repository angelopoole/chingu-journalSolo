import { NextFunction, Request, Response } from 'express';

interface ErrorMiddleware {
  err: Error;
  req: Request;
  res: Response;
  next: NextFunction;
}

export default ErrorMiddleware;
