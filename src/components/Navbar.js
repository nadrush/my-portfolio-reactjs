import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="notMobile">
                <div className="logo"><a href="#">Nadeem Rasheed</a></div>
                <ul className="navbar-ul">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
