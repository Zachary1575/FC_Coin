import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes }

export default function Navbar() {
    return (
        <>
            <div classname="navbar" /*This is the entire navbar element*/>
                <div className="navbar-container container">
                    <Link to='/' classname="navbar-logo">
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
