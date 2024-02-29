import { useState } from "react"

import "../styles/BookingForm.css"

export default function BookingForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(new Date());
   const [times, setTimes] = useState("")
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch({type: "update_times", payload: date});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "500px", gap: "20px" }}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding Reception</option>
                <option>Others</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}
