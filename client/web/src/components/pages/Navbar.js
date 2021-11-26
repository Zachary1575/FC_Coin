import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MySVG } from '../pages/FCLogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const title = {
        fontFamily: 'Montserrat'
    }

    //Only renders the button one time
    useEffect(() => {
        showButton()
        
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value = {{ color: '#fff'}}>
            <div className="navbar" /*This is the entire navbar element*/>
                <div className="navbar-container container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <MySVG to='/' className = 'navbar-icon' />
                        <p style={title}>FIDEICOMMISSUM</p>
                    </Link>
                    <div className ="menu-icon" onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/About' className='nav-links'>
                                Community
                            </Link>
                        </li>

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
            </IconContext.Provider>
        </>
    );
}
