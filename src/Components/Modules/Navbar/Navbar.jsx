import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../../Contexts/User/UserContext";

function Navbar() {
    const { user } = useContext(UserContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
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
        setIsMenuOpen(false);
        setSearchQuery("");
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar__left">
                        <div onClick={closeMenu} className="navbar__logo">
                            {user ? (
                                <div>You: {`${user.username}`}</div>
                            ) : (
                                <Link to="/">LOGO</Link>
                            )}
                        </div>
                    </div>
                    <div className="navbar__right">
                        <div
                            className={`navbar__menu ${
                                isMenuOpen ? "open" : ""
                            }`}
                        >
                            <ul className="navbar-menu">
                                <li
                                    onClick={closeMenu}
                                    className="navbar-menu__item"
                                >
                                    <Link to="/">All houses</Link>
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
                                {user ? (
                                    <>
                                        <li
                                            onClick={closeMenu}
                                            className="navbar-menu__item"
                                        >
                                            <Link to="/addnewhouse">
                                                Add new house
                                            </Link>
                                        </li>
                                        <li
                                            onClick={closeMenu}
                                            className="navbar-menu__item"
                                        >
                                            <Link to={`/${user.id}/myhouses`}>
                                                My houses
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li
                                            onClick={closeMenu}
                                            className="navbar-menu__item"
                                        >
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li
                                            onClick={closeMenu}
                                            className="navbar-menu__item"
                                        >
                                            <Link to="/signup">Signup</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="navbar__hamburger" onClick={toggleMenu}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
