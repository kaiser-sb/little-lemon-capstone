import "../styles/Reservation.css"

import BookingForm from "./BookingForm"

export default function Reservation (props) {
    return (
        <section className="reservation">
            <div className="wrapper reservation-container">
                <div className="reservation-header">
                    <h1>Reserve a Table</h1>
                    <p>Please fill out the form to reserve a table</p>
                </div>
                <div className="reservation-image">
                    <img src={require("../assets/images/restaurant.jpg")} alt="Little Lemon Restaurant" width="500px" loading="lazy"/>
                </div>
                <div className="reservation-form">
                    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
                </div>
            </div>
        </section>
    )
}