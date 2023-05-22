import React from "react";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { useAuthContext } from "../../context/AuthProvider";
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

const LoginSocialMedia = () => {
    const { googleLogin } = useAuthContext()

    const handleGoogleLogin = async () => {
        await googleLogin()
    }

    return (
        <>
        <div>
                <div>
                    <GoogleLoginButton onClick={handleGoogleLogin}/>
                </div>
                <div>
                    
                    <LinkedInLoginButton />
                </div>
                <div>
                    
                    <GithubLoginButton />
                </div>
            </div></>
    )
}

const RegisterForm = ({ handleChange, handleBlur, handleSubmit, value }) => {
    
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
                                value={value}
                            />
                        </div>
                    ))}

                <RegexErrors />

                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>

            <div>----or-----</div>

            <LoginSocialMedia />
        </div>
    );
};

export const RegisterLayout = ({
    signUp,
    handleChange,
    handleBlur,
    handleSubmit,
    handleClickUp,
    value
}) => {
    return (
        <>
            {signUp ? (
                <RegisterForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                    value={value}
                />
            ) : (
                <InitialRegister handleClickUp={handleClickUp} />
            )}
        </>
    );
};
