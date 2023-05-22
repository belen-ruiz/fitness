import React, { createContext, useContext, useState } from 'react';
import { initialForm, validateForm, newForm } from "../utils/UserData";
import { Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

    const signingUp = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
    };
      
    const login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
    }

  return (
    <AuthContext.Provider
        value={{
            signingUp,
            login
        }}
    >
        { children }
    </AuthContext.Provider>
  )
}
