import React from "react";
import "./Signup.css";

function Signup() {
    return (
        <div className="signup">
            <div className="container">
                <div className="signup__wrapper">
                    <h1 className="signup__title">Sign up</h1>
                    <p className="signup__caption">
                        Please enter your data to sign up
                    </p>
                    <form className="signup-form">
                        <label className="signup__label" htmlFor="username">
                            Username
                            <input
                                className="signup__input"
                                type="username"
                                name="username"
                                id="username"
                            />
                        </label>
                        <label className="signup__label" htmlFor="email">
                            Email
                            <input
                                className="signup__input"
                                type="email"
                                name="email"
                                id="email"
                            />
                        </label>
                        <label className="signup__label" htmlFor="password">
                            Password
                            <input
                                className="signup__input"
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

export default Signup;
