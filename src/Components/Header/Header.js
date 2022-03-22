import React from 'react';
import './Header.css';
import logo from '../../../src/images/Logo.svg'

const Header = () => {
    return (
        <nav className="header">
            <div>
            <img src={logo} alt="" />
    
            </div>

            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/order">Order</a>
            </div>
        </nav>
    );
};

export default Header;