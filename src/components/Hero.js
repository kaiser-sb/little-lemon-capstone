import { Link } from "react-router-dom"

import "../styles/CommonStyles.css"
import "../styles/Hero.css"

export default function Hero() {
    const linkStyle = { textDecoration: 'none', color: 'inherit', fontFamily: 'Karla', fontSize: '1.1rem' }
    return (
        <section className="hero-container">
            <header className="hero wrapper">
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="header-info">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </div>
                        <div className="header-button">
                            <button id="header-button-link">
                                <Link to="/reservations" style={linkStyle}>Reserve a Table</Link>
                            </button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img src={require("../assets/images/restauranfood.jpg")} alt="Delicious food served in Little Lemon" loading="lazy" />
                    </div>
                </div>
            </header>
        </section>
        
    )
}