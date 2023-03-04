import React from 'react';
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {


    return <nav className='navbar'>
        <div className='navbar__logo'>
            <img src="LOGO.png" alt="logo" />
        </div>
        <NavLink to="/">Accueil </NavLink>
        <NavLink to="/about">
            <div>A propos</div>
        </NavLink>
    </nav>;
}

export default Navbar;
