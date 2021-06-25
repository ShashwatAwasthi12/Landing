import React, { useState } from 'react'
import './login.css'


const Login = () => {

    const [login, setlogin] = useState(true)


    return (
        <>
            <div className="container landing-page-right" style={{ display: login ? "" : "none" }}>
                <h1>Login</h1>
                <p>Use your Password for login.</p>
                <hr className="ruler" />
                <div className="landing-form col-md-8">
                    <div class="input-group input-group-lg">
                        <input type="text" className="form-control landing-input" placeholder="Email" />
                    </div>
                    <div class="input-group input-group-lg">
                        <input type="password" className="form-control landing-input" placeholder="Password" />
                    </div>
                    <button type="button" class="btn btn-lg btn-info landing-login">Login</button>
                </div>
                <p>Dont have an existing Account?</p>
                <button type="button" class="btn btn-secondary btn-sm" onClick={() => setlogin(!login)}>Create Account</button>
            </div>

            <div className="container landing-page-right" style={{ display: login ? "none" : "" }}>
                <h1>Signup</h1>
                <p>Create a new Account.</p>
                <hr className="ruler" />
                <div className="landing-form col-md-8">
                    <div class="input-group input-group-lg">
                        <input type="text" className="form-control landing-input" placeholder="Name" />
                    </div>
                    <div class="input-group input-group-lg">
                        <input type="text" className="form-control landing-input" placeholder="Email" />
                    </div>
                    <div class="input-group input-group-lg">
                        <input type="password" className="form-control landing-input" placeholder="Password" />
                    </div>

                    <button type="button" class="btn btn-lg btn-info landing-login">SignUp</button>
                </div>
            </div>
        </>
    )
}

export default Login
