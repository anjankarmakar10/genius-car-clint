import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import {
  auth,
  googleAuthProvider,
  githubAuthProvider,
} from "../config/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubsribe();
  }, []);

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
