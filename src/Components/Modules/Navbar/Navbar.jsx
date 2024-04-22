import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar__left">
                        <ul className="navbar-menu">
                            <li className="navbar-menu__item">
                                <Link to="/">Home page</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <ul className="navbar-menu">
                            <li className="navbar-menu__item">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="navbar-menu__item">
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
