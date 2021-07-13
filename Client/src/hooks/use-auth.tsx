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

  // const checkForToken = async () =>{

  // }

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
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }

    // todo fetch user using email and password, returns userAuth object from server with jwt signature.
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

    // return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
    // todo send email/password, create user, return newUser with jwt token
    // ! endpoint: POST api/users/
  };

  const signout = () => {
    setUser(null);
    // return firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setUser(false);
    //   });
    // todo clear jwtToken, clear user object from state, clear user object from cache or localstorage
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
