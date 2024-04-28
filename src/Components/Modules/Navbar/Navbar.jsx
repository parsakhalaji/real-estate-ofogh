import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../../Contexts/User/UserContext";

function Navbar() {
    const { user } = useContext(UserContext);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const processedSearchQuery = searchQuery
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");
        navigate(`/search/${processedSearchQuery}`);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar__left">
                        <ul className="navbar-menu">
                            <li className="navbar-menu__item">
                                <Link to="/">Home page</Link>
                            </li>
                            <li className="navbar-menu__item">
                                <form
                                    className="navbar__search"
                                    onSubmit={handleSearchSubmit}
                                >
                                    <input
                                        className="navbar__input"
                                        placeholder="Type to search ..."
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                </form>
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
                                    <li className="navbar-menu__item">
                                        <Link to={`/${user.id}/myhouses`}>
                                            My houses
                                        </Link>
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
