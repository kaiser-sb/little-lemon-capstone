import "../styles/CommonStyles.css"
import "../styles/Hero.css"

export default function Hero() {
    return (
        <section className="hero-container">
                <header className="hero">
                <div className="wrapper hero-content">
                    <div className="hero-left">
                        <div className="header-info">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </div>
                        <div className="header-button">
                            <button>Reserve a Table</button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img src={require("../assets/images/restauranfood.jpg")} alt="Delicious food served in Little Lemon" />
                    </div>
                </div>
                
            </header>
        </section>
        
    )
}