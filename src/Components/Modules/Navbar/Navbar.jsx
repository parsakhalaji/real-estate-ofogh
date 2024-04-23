import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../../Contexts/User/UserContext";

function Navbar() {
    const { user } = useContext(UserContext);

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
                            {user ? (
                                <>
                                    <li className="navbar-menu__item">
                                        <Link to="/addnewhouse">
                                            Add new house
                                        </Link>
                                    </li>
                                    <li className="navbar-menu__item">
                                        Your account: {user.username}
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="navbar-menu__item">
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className="navbar-menu__item">
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
