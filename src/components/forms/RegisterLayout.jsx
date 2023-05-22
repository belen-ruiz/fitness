import React from "react";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { inputsSignUp } from "../constantes/inputs";



const RegisterLayout = ({
    form,
    newUser,
    signUp,
    value,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
}) => {
    
    return (
            <div className={ signUp
                    ? "login-screens signup-form active"
                    : "login-screens signin-form"}>

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
                                value={value}
                            />
                        </div>
                    ))}

                {/* {(errors.name && <p>{errors.name}</p>) ||
                    (errors.email && <p>{errors.email}</p>)} */}


                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>

            <div>----or-----</div>

            <div>
                <div> <GoogleLoginButton /> </div>
                <div> <LinkedInLoginButton /> </div>
                <div> <GithubLoginButton /> </div>
            </div>
        </div>
    );
};

const InitialRegister = ({ handleClickUp }) => {
    return(
    <>
        <div className="login-screens signup">
            <div>REGISTER</div>
            <div href="#">Crea tu cuenta</div>
            <button onClick={handleClickUp}>Sigin up</button>
        </div>
    </>
    )
}

export {RegisterLayout, InitialRegister}