import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar nav nav-pills nav-justified">
            <NavLink className="nav-item nav-link" to="/">
                Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/registration">
                Registration
            </NavLink>
            <NavLink className="nav-item nav-link" to="/admin">
                Admin
            </NavLink>
        </nav>
    );
}

export default NavBar;