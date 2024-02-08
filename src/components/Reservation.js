import "../styles/Reservation.css"

export default function Reservation () {
    return (
        <section className="reservation">
            <div className="wrapper">
                <div className="reservation-header">
                    <h1>Reserve a Table</h1>
                    <p>Please fill out the form to reserve a table</p>
                </div>
                <div className="reservation-image">
                    <img src={require("../assets/images/restaurant.jpg")} alt="Little Lemon Restaurant" width="300px"/>
                </div>
                <div className="reservation-form">
                    <form>
                        <label htmlFor="name">Full Name <sup>*</sup></label>
                        <input type="text" placeholder="John Doe" id="name" />

                        <label htmlFor="email">Email ID <sup>*</sup></label>
                        <input type="email" placeholder="john.doe@example.com" id="email" />

                        <label htmlFor="name">Full Name <sup>*</sup></label>
                        <input type="text" placeholder="John Doe" id="name" />
                    </form>
                </div>
            </div>
        </section>
    )
}