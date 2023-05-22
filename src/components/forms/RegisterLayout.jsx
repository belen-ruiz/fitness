import React from "react";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { inputsSignUp } from "../constantes/inputs";

const RegexErrors = () => {
    return (
        // (errors.name && <p>{errors.name}</p>) ||
        // (errors.email && <p>{errors.email}</p>)
        <></>
    );
};

const InitialRegister = ({ handleClickUp }) => {
    return (
        <>
            <div>
                <div>REGISTER</div>
                <div href="#">Crea tu cuenta</div>
                <button onClick={handleClickUp}>Sigin up</button>
            </div>
        </>
    );
};

const RegisterForm = ({ handleChange, handleBlur, handleSubmit }) => {
    return (
        <div>
            <div className="title">Join Us!</div>

            <div className="subtitle">Create your new account</div>

            <form onSubmit={handleSubmit}>
                {inputsSignUp &&
                    inputsSignUp.map((input) => (
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

                <RegexErrors />

                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>

            <div>----or-----</div>

            <div>
                <div>
                    <GoogleLoginButton />
                </div>
                <div>
                    
                    <LinkedInLoginButton />
                </div>
                <div>
                    
                    <GithubLoginButton />
                </div>
            </div>
        </div>
    );
};

export const RegisterLayout = ({
    signUp,
    handleChange,
    handleBlur,
    handleSubmit,
    handleClickUp,
}) => {
    return (
        <>
            {signUp ? (
                <RegisterForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <InitialRegister handleClickUp={handleClickUp} />
            )}
        </>
    );
};
