import React, { useContext, useState } from "react";
import "./Login.css";
import UserContext from "../../../Contexts/User/UserContext";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, setUser } = useContext(UserContext);

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        const userData = { email, password };
        fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUser(data.user);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="login">
            <div className="container">
                <div className="login__wrapper">
                    <h1 className="login__title">Login</h1>
                    <p className="login__caption">
                        Please enter your email and password to login
                    </p>
                    <form onSubmit={loginSubmitHandler} className="login-form">
                        <label className="login__label" htmlFor="email">
                            Email
                            <input
                                className="login__input"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="login__label" htmlFor="password">
                            Password
                            <input
                                className="login__input"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button className="btn login__btn">Submit</button>
                        {user && (
                            <Link className="btn" to="/addnewhouse">
                                Add new house
                            </Link>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
