import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../styles/CommonStyles.css"
import "../styles/Footer.css"

// const linkStyle = { textDecoration: 'none', color: 'inherit' }

export default function Footer() {
    const linkStyle = { textDecoration: 'none', color: 'inherit' }

    return (
        <footer className="footer">
            <div className="wrapper footer-container">
                <div className="footer-image">
                    <img src={require("../assets/images/Asset 20@4x.png")} 
                        alt="Little lemon footer logo" />
                </div>

                <div className="footer-data">
                    <div className="footer-links">
                        <h4>LINKS</h4>
                        <ul>
                            <li><Link to="/" style={linkStyle}>Home</Link></li>
                            <li><Link to="/about" style={linkStyle}>About</Link></li>
                            <li><Link to="/menu" style={linkStyle}>Menu</Link></li>
                            <li><Link to="/reservations" style={linkStyle}>Reservations</Link></li>
                            <li><Link to="/orderonline" style={linkStyle}>Order Online</Link></li>
                            <li><Link to="/login" style={linkStyle}>Login</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>CONTACT</h4>
                        <address>
                            <p><b>Address :</b>  3505 Cecil Street</p>

                            <p><b>City :</b>  Chicago</p>

                            <p><b>State :</b>  Illinois</p>

                            <p><b>Zipcode :</b>  60605</p>

                            <p><b>Telephone :</b>  312-259-2919</p>

                            <p><b>Mobile Number :</b>  773-426-5458</p>
                        </address>
                    </div>

                    <div className="footer-social-connect">
                        <h4>CONNECT</h4>
                            <ul>
                                <li><a href="mailto:little.lemon@example.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faTiktok} /></li>
                            </ul>
                    </div>
                </div>
            </div>
            <small className="copyright">© Sunetra Bhowmick - 2024</small>
        </footer>

    )
}