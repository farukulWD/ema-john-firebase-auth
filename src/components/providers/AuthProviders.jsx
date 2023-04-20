import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const Auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();
const facebookProvider= new FacebookAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const logout = () => {
    return signOut(Auth);
  };

  const googleLogin=()=>{
    signInWithPopup(Auth,googleProvider);
  }

  const facebookLogin= ()=>{
    signInWithPopup(Auth, facebookProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logout,
    googleLogin,
    facebookLogin
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
