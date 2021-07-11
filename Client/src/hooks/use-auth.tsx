// this is where authentication files will be made.
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';
const authContext = createContext();

export const ProvideAuth = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    // return firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
    // todo fetch user using email and password, returns userAuth object from server with jwt signature.
  };

  const signup = (email, password) => {
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

  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    // if (user) {
    // setUser(user);
    // } else {
    // setUser(false);
    // }
    // });
    // Cleanup subscription on unmount
    // return () => unsubscribe();
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
