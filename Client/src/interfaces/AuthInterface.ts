import { User } from './userInterfaces';

interface Auth {
  user: User | null;
  loading: boolean;
  error: string | null;
  signin: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  signout: () => void;
  clearError: () => void;
}

export type { Auth };
