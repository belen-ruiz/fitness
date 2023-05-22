import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import React, { useState } from "react";
import { RegisterLayout } from "./RegisterLayout";
import { validateForm, newForm } from "../../utils/UserData";
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthProvider";

export const RegisterContainer = ({ signUp, handleClickUp }) => {
    const [newUser, setNewUser] = useState(newForm, validateForm);
    const [errors, setErrors] = useState();

    const { signingUp } = useAuthContext()

    const handleChange = ({ target: { name, value } }) => {
        setErrors(validateForm(newUser));
        setNewUser({
            ...newUser,
            [name]: value,
        });
        console.log(newUser);
    };

    const handleBlur = (e) => {
        e.stopPropagation();
        setErrors(validateForm(newUser));
        handleChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            signingUp(newUser.email, newUser.password);
            console.log("uploadSucceded");
        } catch (error) {
            setErrors(error.message)
            console.log(error.message);
        }
        setNewUser(newForm);
    };

    return (
        <>
            <RegisterLayout 
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                signUp={signUp}
                handleClickUp={handleClickUp}
                />
        </>);
};


// signingUp,handleChange,handleBlur,handleSubmit