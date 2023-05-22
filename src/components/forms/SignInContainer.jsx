import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { validateForm, initialForm } from "../../utils/UserData";
import { SignInLayout } from "./SignInLayout";

export const SignInContainer = ({ signIn, handleClickIn }) => {

    const [errors, setErrors] = useState();
    const { login, user, setUser } = useAuthContext()
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password)
            console.log("Login Succeded");
            navigate("/")
        } catch (error) {
            console.log(error.message)
            setErrors(error.message)
        }
        setUser(initialForm)   
    };

    return (
        <>
            <SignInLayout 
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                signIn={signIn}
                handleClickIn={handleClickIn}
            />
        </>);
};

