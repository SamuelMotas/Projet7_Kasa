import React from 'react';
import "../styles/Footer.css"

function Footer() {
    return <div className='footer'>
        <div className='footer__logo'>
            <img src="logofooter.png" alt="logo" />
        </div>
        <div className='footer__text'>
            © 2020 Kasa. All rights reserved
        </div>
    </div>;
}

export default Footer;
