import React from 'react';
import logo from '../../assests/logo.png';
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="nav-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#books">Books</a>
                <a href="#contact">Contact</a>
                
            </div>

        </div>
    );
};

export default Nav;