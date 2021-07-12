import jwt from 'jsonwebtoken';

const generateToken = (userId: number) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '20d' });
};

export { generateToken };
