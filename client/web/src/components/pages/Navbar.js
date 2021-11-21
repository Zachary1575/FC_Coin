import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../Button';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <div classname="navbar" /*This is the entire navbar element*/>
                <div className="navbar-container container">
                    <Link to='/' classname="navbar-logo">
                        <MdFingerprint to='/' className = 'navbar-icon' />
                        FIDEICOMMISSUM
                    </Link>
                    <div className ="menu-icon" onClick={handleClick} />
                    {click ? <FaTimes /> : <FaBars />}
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links'>
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/ContactUs' className='nav-links'>
                                Contact Us
                            </Link>
                        </li>
                        
                        <li className="nav-btn">
                            {button ? (
                                <Link to="/sign-up" className= "btn-link">
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ): (
                                <Link to="/sign-up"  className= "btn-link">
                                    <Button buttonStyle="btn--outline" buttonSize='btn--mobile'>SIGN UP</Button>
                                </Link>
                            )}

                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
