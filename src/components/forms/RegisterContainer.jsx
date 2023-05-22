import React, { useState } from "react";
import { RegisterLayout } from "./RegisterLayout";
import { validateForm, initialForm } from "../../utils/UserData";
import { useAuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const RegisterContainer = ({ signUp, handleClickUp }) => {
    const [errors, setErrors] = useState();
    const { signingUp, user, setUser } = useAuthContext()
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setErrors(validateForm(user));
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        e.stopPropagation();
        setErrors(validateForm(user));
        handleChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            signingUp(user.email, user.password);
            console.log("uploadSucceded");
            navigate("/")
        } catch (error) {
            setErrors(error.message)
            console.log(error.message);
        }
        setUser(initialForm);
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