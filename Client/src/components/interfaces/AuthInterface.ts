import { User } from './userInterfaces';

interface Auth {
  user: User | null;
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  signout: () => void;
}

export type { Auth };
