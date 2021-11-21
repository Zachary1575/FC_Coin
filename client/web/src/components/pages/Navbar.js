import React from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
    return (
        <>
            <div classname="navbar" /*This is the entire navbar element*/>
                <div className="navbar-container container">
                    <Link to='/' classname="navbar-logo">
                        <MdFingerprint to='/' className = 'navbar-icon' />
                        FIDEICOMMISSUM
                    </Link>
                    <div className ="menu-icon">
                        asd
                    </div>
                </div>
            </div>
            
        </>
    )
}
