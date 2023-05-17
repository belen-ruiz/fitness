import React from "react";
import { inputsSignUp } from "./inputs";



export const RegisterLayout = ({
    form,
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

            <div className="title">Create Account</div>
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

                {(errors.name && <p>{errors.name}</p>) ||
                    (errors.email && <p>{errors.email}</p>)}

                <div href="#">Forgot your password?</div>

                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>
        </div>
    );
};