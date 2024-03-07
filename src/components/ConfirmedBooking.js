import React from "react";
import { Link } from "react-router-dom";

import "../styles/ConfirmedBooking.css"
import "../styles/CommonStyles.css"

function ConfirmedBooking () {
    return(
            <section className="wrapper confirmed-section">
                <img src={require("../assets/images/confirmed_label.png")} alt="confirmation logo" />
                <h1>Your booking has been confirmed.</h1>
                <p>Thank you for celebrating with us!</p>
                <Link to="/"><button className="button">Return to Home</button></Link>
            </section>
    )
}

export default ConfirmedBooking;
