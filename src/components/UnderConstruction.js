import { Link } from "react-router-dom";

import "../styles/CommonStyles.css"
import "../styles/UnderConstruction.css"

export default function UnderConstruction() {
    return (
        <div className="wrapper container-construction">
            <img src={require("../assets/images/underconstruction.png")} alt="Under Costruction" />
            <h1>Coming Soon!</h1>
            <p>This page is under construction. Please check back later.</p>
            <Link to="/"><button>Return to Home</button></Link>
        </div>
  );
}