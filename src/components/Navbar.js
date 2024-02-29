import { Link } from "react-router-dom"

import "../styles/CommonStyles.css"
import "../styles/Nav.css"

export default function Navbar() {
    const linkStyle = { textDecoration: 'none', color: 'inherit' }

    return (
        <nav className="navbar">
            <div className="wrapper navbar-content">
                <img src={require("../assets/images/Logo .png")} alt="Little Lemon Logo" />
                <ul>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About</Link></li>
                    <li><Link to="/menu" style={linkStyle}>Menu</Link></li>
                    <li><Link to="/reservations" style={linkStyle}>Reservations</Link></li>
                    <li><Link to="/orderonline" style={linkStyle}>Order Online</Link></li>
                    <li><Link to="/login" style={linkStyle}>Login</Link></li>
                </ul>
            </div>

        </nav>
    )
}
