import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/ConfirmedBooking.css"
import "../styles/CommonStyles.css"

function ConfirmedBooking () {

    const location = useLocation();
    const formData = location.state;


    return(
            <section className="wrapper confirmed-section">
                <img src={require("../assets/images/confirmed_label.png")} alt="confirmation logo" loading="lazy" />
                <h1>Hey {formData.name.split(" ")[0]}, your booking has been confirmed.</h1>
                <p>A confirmation E-mail has been sent at <b style={{fontSize: "1.2rem"}}>{formData.email}</b>. Thank you for celebrating with us!</p> 
                <table className="booking-table">
                    <tbody>
                        <tr>
                            <th>Date:</th>
                            <td>{formData.date}</td>
                        </tr>
                        <tr>
                            <th>Time:</th>
                            <td>{formData.times}</td>
                        </tr>
                        <tr>
                            <th>Occasion:</th>
                            <td>{formData.occasion}</td>
                        </tr>
                        <tr>
                            <th>Number of Guests:</th>
                            <td>{formData.guests}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/"><button className="button">Return to Home</button></Link>
            </section>
    )
}

export default ConfirmedBooking;
