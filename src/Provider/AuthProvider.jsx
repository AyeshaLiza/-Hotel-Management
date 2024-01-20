import { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const googleSignIn = (value) => {
    return signInWithPopup(auth, googleProvider)
  };
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  })

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  const profileInfo = (name, photo)=>{
    return updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: photo
    })
  }
  const AuthInfo = {
    user,
    loading,
    signUp,
    signIn,
    googleSignIn,
    logOut,
    profileInfo
  }
  return <AuthContext.Provider value={AuthInfo}>
    {children}
  </AuthContext.Provider>

};

export default AuthProvider;