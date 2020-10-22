import React from 'react';
import './header.css';
import mestoLogo from '../../images/logo.svg';

function Header() {
    return (
        <header className="header root__section">
            <img src={mestoLogo} alt="Mesto логотип" className="logo" />
        </header>
    );
}

export default Header;