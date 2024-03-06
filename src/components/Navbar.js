import { Link } from "react-router-dom"
import { useState } from "react"

import Hamburger from "./Hamburger"

import "../styles/CommonStyles.css"
import "../styles/Nav.css"

export default function Navbar() {
    const linkStyle = { textDecoration: 'none', color: 'inherit' }

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <nav className="navbar">
            <div className="wrapper navbar-content">
                <img src={require("../assets/images/Logo .png")} alt="Little Lemon Logo" />
                <div className="hamburger-container" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
                <ul className="nav-links">
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About</Link></li>
                    <li><Link to="/menu" style={linkStyle}>Menu</Link></li>
                    <li><Link to="/reservations" style={linkStyle}>Reservations</Link></li>
                    <li><Link to="/orderonline" style={linkStyle}>Order Online</Link></li>
                    <li><Link to="/login" style={linkStyle}>Login</Link></li>
                </ul>
                {/* Overlay for the navigation links */}
                {hamburgerOpen && (
                    <div className="overlay" onClick={toggleHamburger}>
                        <ul className="overlay-menu">
                            <li><Link to="/" style={linkStyle}>Home</Link></li>
                            <li><Link to="/about" style={linkStyle}>About</Link></li>
                            <li><Link to="/menu" style={linkStyle}>Menu</Link></li>
                            <li><Link to="/reservations" style={linkStyle}>Reservations</Link></li>
                            <li><Link to="/orderonline" style={linkStyle}>Order Online</Link></li>
                            <li><Link to="/login" style={linkStyle}>Login</Link></li>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    )
}
