import React, { useState } from "react";
import "./Signup.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__wrapper">
                    <h1 className="signup__title">Sign up</h1>
                    <p className="signup__caption">
                        Please enter your data to sign up
                    </p>
                    <form onSubmit={signupHandler} className="signup-form">
                        <label className="signup__label" htmlFor="username">
                            Username
                            <input
                                className="signup__input"
                                type="username"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label className="signup__label" htmlFor="email">
                            Email
                            <input
                                className="signup__input"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="signup__label" htmlFor="password">
                            Password
                            <input
                                className="signup__input"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button className="btn signup__btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
