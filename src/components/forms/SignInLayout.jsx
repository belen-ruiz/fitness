import React from "react";
import { inputsSignIn } from "../constantes/inputs";

const InitialSignIn = ({ handleClickIn }) => {
    return (
        <div className="">
            <div>SIGN IN</div>
            <div href="#">Si ya tienes una cuenta</div>
            <button onClick={handleClickIn}>Sigin In</button>
        </div>
    );
};

const SignInForm = ({ handleChange, handleBlur, handleSubmit }) => {
    return (
        <div>
            <div className="title">Welcome back!</div>
            <div className="subtitle">Complete with your account details</div>
            <form onSubmit={handleSubmit}>
                {inputsSignIn &&
                    inputsSignIn.map((input) => (
                        <div key={input.name}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required={input.required}
                            />
                        </div>
                    ))}

                <div href="#">Forgot your password?</div>

                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export const SignInLayout = ({
    signIn,
    value,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleClickIn,
}) => {
    return (
        <>
            {signIn ? (
                <SignInForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <InitialSignIn handleClickIn={handleClickIn} />
            )}
        </>
    );
};

