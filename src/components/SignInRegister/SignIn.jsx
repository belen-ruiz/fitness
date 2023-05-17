import React, { useState } from "react";

export const SignIn = () => {

  const [signIn, toggle] = useState(true)
  
    return (
        <div>
            <div signIn={signIn}>
                <form>
                    <div className="title">Create Account</div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>

            <div signIn={signIn}>
                   <form>
                       <div>Sign in</div>
                       <input type='email' placeholder='Email' />
                       <input type='password' placeholder='Password' />
                       <div href='#'>Forgot your password?</div>
                       <button>Sigin In</button>
                   </form>
            </div>

            <div className="" signIn={signIn}>
              <div className="" signIn={signIn}>
                <div className="left" signIn={signIn}>
                    <div>Welcome Back!</div>
                    <div href='#'>To keep connected with us please login with your personal info</div>
                    <button onClick={() => toggle(true)}>Sigin In</button>
                </div>

                <div className="right" signIn={signIn}>
                    <div>Hello, Friend!</div>
                    <div href='#'>Enter Your personal details and start journey with us</div>
                    <button onClick={() => toggle(false)}>Sigin up</button>
                </div>
              </div>
            </div>
        </div>
    );
};
