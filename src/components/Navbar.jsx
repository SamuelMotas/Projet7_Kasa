import React from 'react';
import "../styles/Navbar.css"

function Navbar() {
    return <nav className='navbar'>
        <div className='navbar__logo'>
            <img src="LOGO.png" alt="logo" />
        </div>
        <div>Acccueil</div>
        <div>A propos</div>
    </nav>;
}

export default Navbar;
