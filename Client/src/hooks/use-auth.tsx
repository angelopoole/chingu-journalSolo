import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import axios from 'axios';
import { Auth } from '../interfaces/AuthInterface';
import { User } from '../interfaces/userInterfaces';
const authContext = createContext<Auth>({} as Auth);

export const ProvideAuth = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const persistState = async (token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get('/api/users/login/token', config);
    setUser({ ...data, token });
  };

  // @desc fetches user from backend using email + string.
  const signin = async (email: string, password: string) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        config
      );
      localStorage.setItem('token', data.token);
      setUser(data);
    } catch (error) {
      console.error('error :)', error);
      return { error };
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      let { data }: { data: User } = await axios.post(
        `/api/users`,
        { name, email, password },
        config
      );
      setUser(data);
      setLoading(false);
      return user;
    } catch (err: any) {
      console.error('ERR', err.response);
      const errResponse =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;

      setError(errResponse);
      setLoading(false);
      return { error, loading };
    }
  };

  const signout = () => {
    setUser(undefined);
    localStorage.clear();
  };

  // ! not part of mvp, implement later. - password reset email

  const clearError = () => {
    return setError(null);
  };

  useEffect(() => {
    if (localStorage.token && !user) {
      persistState(localStorage.token);
    }
  }, [user, error, loading]);

  return {
    user,
    loading,
    error,
    signin,
    signup,
    signout,
    clearError,
  };
}
