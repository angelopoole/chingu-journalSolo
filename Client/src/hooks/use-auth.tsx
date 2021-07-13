// this is where authentication files will be made.
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
const authContext = createContext<Auth | undefined>(undefined);

export const ProvideAuth = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.

  const persistState = async (token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data: User = await axios.get('/api/users/login/token', config);
    console.log('userHereToken', data);
    setUser({ ...data, token });
  };
  if (localStorage.token && !user) {
    persistState(localStorage.token);
  }

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
      console.log(error);
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
    } catch (err) {
      console.log('ERR', err.response);
      const errResponse =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;

      setError(errResponse);
      setLoading(false);
      return { error, loading };
    }
    // todo send email/password, create user, return newUser with jwt token
    // ! endpoint: POST api/users/
  };

  const signout = () => {
    setUser(null);
    localStorage.clear();
  };

  // ! not part of mvp, implement later.
  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };
  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  const clearError = () => {
    return setError(null);
  };

  useEffect(() => {
    console.log('useAuth useEffect');
  }, [user, error, loading]);

  return {
    user,
    loading,
    error,
    signin,
    signup,
    signout,
    clearError,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
