import React, { createContext, useContext, useState } from 'react';
import { initialForm, validateForm, newForm } from "../utils/UserData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(initialForm, validateForm)
    const [newUser, setNewUser] = useState(newForm, validateForm)
    const [errors, setErrors] = useState()
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const handleClickIn = () => {
      setSignIn(!signIn);
      setSignUp(false);
    };
    
    const handleClickUp = () => {
      setSignUp(!signUp);
      setSignIn(false);
    };

    const signingUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
      }
      
    const handleChange = ({target: {name, value}}) => {
      setErrors(validateForm(newUser));
      setNewUser({
        ...newUser,
        [name]: value,
      });
      console.log(newUser)
    };
    
      const handleBlur = (e) => {
        e.stopPropagation()
        setErrors(validateForm(newUser));
        handleChange(e);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(newUser));
        signingUp(newUser.email, newUser.password)
        setNewUser({
          ...newUser, newUser
        });
        console.log(newUser) 
        setNewUser(newForm);
        }


  return (
    <AuthContext.Provider
        value={{
            handleClickIn,
            handleClickUp,
            handleChange,
            handleBlur,
            handleSubmit,

        }}
    >
        { children }
    </AuthContext.Provider>
  )
}
