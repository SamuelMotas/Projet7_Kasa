import React from 'react';
import { NavLink } from "react-router-dom"
import "../styles/Navbar.scss"

function Navbar() {


    return <nav className='navbar'>
        <NavLink to="/">
            <div className='navbar__logo'>
                <img src="LOGO.png" alt="logo" />
            </div>
        </NavLink>
        <NavLink to="/">Accueil </NavLink>
        <NavLink to="/about">
            <div>A propos</div>
        </NavLink>
    </nav>;
}

export default Navbar;
