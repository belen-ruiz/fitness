import React, { useState } from "react";

export const SignIn = () => {
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const handleClickIn = () => {
      setSignIn(!signIn)
    };

    const handleClickUp = () => {
      setSignUp(!signUp)
    };

    const handleSumbit = () => {};

    return (
        <div>
            {/* ///welcome screen */}
            <div className="welcome-screen">
                <div className="welcome-screen-left">
                    <div>SIGN IN</div>
                    <div href="#">
                        Si ya tienes una cuenta 
                    </div>
                    <button onClick={handleClickIn}>Sigin In</button>
                </div>

                <div className="welcome-screen-right">
                    <div>REGISTER</div>
                    <div href="#">
                        crea tu cuenta
                    </div>
                    <button onClick={handleClickUp}>Sigin up</button>
                </div>
            </div>

            <div className={signIn ? "form signin-form active" : "form signin-form"}>
                <form>
                    <div>Sign in</div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div href="#">Forgot your password?</div>
                    <button onClick={handleSumbit}>Sigin In</button>
                </form>
            </div>

            <div className={signUp ? "form signup-form active" : "form signup-form"}>
                <form>
                    <div className="title">Create Account</div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button onClick={handleSumbit}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};
