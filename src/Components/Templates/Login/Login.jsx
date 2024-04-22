import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <div className="container">
                <div className="login__wrapper">
                    <h1 className="login__title">Login</h1>
                    <p className="login__caption">
                        Please enter your email and password to login
                    </p>
                    <form className="login-form">
                        <label className="login__label" htmlFor="email">
                            Email
                            <input
                                className="login__input"
                                type="email"
                                name="email"
                                id="email"
                            />
                        </label>
                        <label className="login__label" htmlFor="password">
                            Password
                            <input
                                className="login__input"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
