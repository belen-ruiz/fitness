import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialForm, validateForm } from "../utils/UserData";
import { Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(initialForm, validateForm);

    const signingUp = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
    };
      
    const login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        console.log(currentUser)
      })
    }, [])
    

  return (
    <AuthContext.Provider
        value={{
            user,
            setUser,
            signingUp,
            login
        }}
    >
        { children }
    </AuthContext.Provider>
  )
}
