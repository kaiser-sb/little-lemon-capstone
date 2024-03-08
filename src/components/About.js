import "../styles/CommonStyles.css"
import "../styles/About.css"

export default function About() {
    return (
        <section className="about">
            <div className="wrapper about-container">
                <div className="about-left">
                    <div className="about-title">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                    <img src={require("../assets/images/Mario and Adrian A.jpg")} loading="lazy" className="mobile-only" alt="Mario and Adrian"/>
                    <div className="about-details">
                        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                        <br></br>
                        <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                    </div>
                </div>
                <div className="about-right">
                    <div className="image-A">
                        <img src={require("../assets/images/restaurant chef B.jpg")} alt="Adrian"/>
                    </div>
                    <div className="image-B">
                        <img src={require("../assets/images/Mario and Adrian A.jpg")} alt="Mario and Adrian"/>
                    </div>
                </div>
            </div>

        </section>
    )
}