import { initialForm, newForm, validateForm } from "../../utils/UserData";
import { useState } from "react";
import { InitialRegister, RegisterLayout } from "./RegisterLayout"
import { InitialSignIn, SignInLayout } from "./SignInLayout"
import { useAuthContext } from "../../context/AuthProvider";
import { RegisterContainer } from "./RegisterContainer";
import { SignInContainer } from "./SignInContainer";

export const LoginLayout = () => {
    
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [value, setValue] = useState()

    
    const handleClickIn = () => {
      setSignIn(!signIn);
      console.log("entrar")
    };
    
    const handleClickUp = () => {
      setSignUp(!signUp);
      console.log("suscribirse")

    };

    return (
        <div className="container-login">
                <SignInContainer signIn={signIn}
                handleClickIn={handleClickIn}
                value={value}/>

                <RegisterContainer signUp={signUp}
                handleClickUp={handleClickUp}/>
        </div>
    );
}
// import { useForm } from "./useForm";
// import { initialForm, validationsForm } from "./formData";
// import { inputsSignIn, inputsSignUp } from "./inputs";
// import { useState } from "react";
// import { RegisterLayout } from "./RegisterLayout"
// import { SignInLayout } from "./SignInLayout"

// export const SignIn = () => {
//     const [signIn, setSignIn] = useState(false);
//     const [signUp, setSignUp] = useState(false);
//     const [value, setValue] = useState();

//     const handleClick = () => {
//         setSignIn(!signIn);
//         setSignUp(!signUp);
//     };

//     const {
//         form,
//         errors,
//         loading,
//         response,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//     } = useForm(initialForm, validationsForm);

//     return (
//         <div className="container-login">
//             <div className="screen welcome">
//                 <div className="screen login">
//                     {/* <div
//                         className={signIn
//                                 ? "login-screens signin-form active"
//                                 : "login-screens signin-form"
//                         }
//                     >
//                         <div className="title">Sign in</div>
//                         <form onSubmit={handleSubmit}>
//                             {inputsSignIn &&
//                                 inputsSignIn.map((input) => (
//                                     <div key={input.name}>
//                                         <label htmlFor={input.name}>
//                                             {input.label}
//                                         </label>
//                                         <input
//                                             type={input.type}
//                                             name={input.name}
//                                             placeholder={input.placeholder}
//                                             onBlur={handleBlur}
//                                             onChange={handleChange}
//                                             required={input.required}
//                                             value={value}
//                                         />
//                                     </div>
//                                 ))}

//                             {(errors.name && <p>{errors.name}</p>) ||
//                                 (errors.email && <p>{errors.email}</p>)}

//                             <div href="#">Forgot your password?</div>

//                             <input
//                                 type="submit"
//                                 value="Enviar"
//                                 onClick={handleSubmit}
//                             />
//                         </form>
//                     </div> */}

//                     <SignInLayout />
//                     <RegisterLayout />

//                     {/* <div
//                         className={
//                             signUp
//                                 ? "login-screens signup-form active"
//                                 : "login-screens signin-form"
//                         }
//                     >
//                         <div className="title">Create Account</div>
//                         <form onSubmit={handleSubmit}>
//                             {inputsSignUp &&
//                                 inputsSignUp.map((input) => (
//                                     <div key={input.name}>
//                                         <label htmlFor={input.name}>
//                                             {input.label}
//                                         </label>
//                                         <input
//                                             type={input.type}
//                                             name={input.name}
//                                             placeholder={input.placeholder}
//                                             onBlur={handleBlur}
//                                             onChange={handleChange}
//                                             required={input.required}
//                                             value={value}
//                                         />
//                                     </div>
//                                 ))}

//                             {(errors.name && <p>{errors.name}</p>) ||
//                                 (errors.email && <p>{errors.email}</p>)}

//                             <div href="#">Forgot your password?</div>

//                             <input
//                                 type="submit"
//                                 value="Enviar"
//                                 onClick={handleSubmit}
//                             />
//                         </form>
//                     </div> */}
//                 </div>

//                 <div className="login-screens signin">
//                     <div>SIGN IN</div>
//                     <div href="#">Si ya tienes una cuenta</div>
//                     <button onClick={handleClick}>Sigin In</button>
//                 </div>

//                 <div className="login-screens signup">
//                     <div>REGISTER</div>
//                     <div href="#">Crea tu cuenta</div>
//                     <button onClick={handleClick}>Sigin up</button>
//                 </div>
//             </div>
//             <div onClick={handleClick}> x </div>
//         </div>
//     );
// };
