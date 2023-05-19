import React from "react";
import { inputsSignIn } from "../constantes/inputs";


const SignInLayout = ({
  form,
  signIn,
  value,
  errors,
  loading,
  response,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
    return (
        <>
            <div
                className={
                    signIn
                        ? "login-screens signin-form active"
                        : "login-screens signin-form"
                }
            >
                <div className="title">Sign in</div>
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
                                    value={value}
                                />
                            </div>
                        ))}
            
                    {/* {(errors.name && <p>{errors.name}</p>) ||
                        (errors.email && <p>{errors.email}</p>)} */}
            
                    <div href="#">Forgot your password?</div>
            
                    <input type="submit" value="Enviar" onClick={handleSubmit} />
                </form>
            </div>
        </>
    );
};

const InitialSignIn = ({handleClick}) => {
    return(
    <div className="login-screens signin">
    <div>SIGN IN</div>
    <div href="#">Si ya tienes una cuenta</div>
    <button onClick={handleClick}>Sigin In</button>
    </div>)
}

export {SignInLayout, InitialSignIn}