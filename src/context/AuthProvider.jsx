import React, { createContext, useContext, useState } from 'react';
import { initialForm, validateForm } from "../utils/UserData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../utils/firebase"


const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(initialForm, validateForm)
    const [errors, setErrors] = useState()
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const handleClickIn = () => {
      console.log("in")
      setSignIn(!signIn);
      setSignUp(false);
    };
    
    const handleClickUp = () => {
      console.log("up")
        setSignIn(!signIn);
        setSignUp(false);
    };

    const signingUp = (Auth, user, email, password) =>{
        createUserWithEmailAndPassword(Auth, user, email, password)
        console.log(Auth, user, email, password)
      }
      
    const handleChange = ({target: {name, value}}) => {
        setErrors(validateForm(user));
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      const handleBlur = (e) => {
        e.stopPropagation()
        setErrors(validateForm(user));
        handleChange(e);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(user));
        signUp(user.name, user.email, user.password)
        setUser({
          ...user, user
        });
        console.log(user) 
        setUser(initialForm);
        }


  return (
    <AuthContext.Provider
        value={{
            signingUp,
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
