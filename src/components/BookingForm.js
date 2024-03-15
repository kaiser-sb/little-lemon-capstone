import { useState, useRef, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import "../styles/BookingForm.css";

export default function BookingForm(props) {
    // useState
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(new Date());
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const [formValid, setFormValid] = useState(false);

    // const history = useHistory();

    const formData = {
        name: name,
        email: email,
        date: date,
        times: times,
        guests: guests,
        occasion: occasion,
    }

    // useRef Hooks
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const dateRef = useRef(null);
    const timesRef = useRef(null);
    const guestsRef = useRef(null);
    const occasionRef = useRef(null);

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        nameRef.current = document.getElementById("name");
        emailRef.current = document.getElementById("email");
        dateRef.current = document.getElementById("res-date");
        timesRef.current = document.getElementById("res-time");
        guestsRef.current = document.getElementById("guests");
        occasionRef.current = document.getElementById("occasion");
    }, []);

    useEffect(() => {
        setFormValid(
            nameRef.current.value && 
            emailRef.current.value && 
            !emailRef.current.validity.typeMismatch &&
            dateRef.current.value && 
            timesRef.current.value && 
            guestsRef.current.value && 
            guestsRef.current.value > 0 &&
            guestsRef.current.value <= 20 &&
            occasionRef.current.value
        );
    }, [name, email, date, times, guests, occasion]);


    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch({type: "update_times", payload: date});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", width: "100%", gap: "20px" }}>

            <label htmlFor="name">Full Name <sup>*</sup></label>
            <input type="text" id="name" ref={nameRef} value={name} placeholder="John Doe" pattern="[a-zA-Z ]+" title="Please enter a valid name"
                aria-invalid={nameRef.current && !nameRef.current.validity.valid ? "true" : null}
                aria-describedby="name-error"
                aria-label="Full Name"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                inputMode="text"
                onChange={(e) => setName(e.target.value)} required />

            <p id="name-error" className="error-message">
                {nameRef.current && nameRef.current.validity.valueMissing ? "Please enter your name" : nameRef.current && nameRef.current.validity.patternMismatch ? "Please enter a valid name" : ""}
            </p>

            <label htmlFor="email">Email ID <sup>*</sup></label>
            <input type="email" id="email" ref={emailRef} placeholder="example@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address"
                aria-invalid={emailRef.current && !emailRef.current.validity.valid ? "true" : null}
                aria-describedby="email-error"
                aria-label="Email ID"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                inputMode="email"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
                
            <p id="email-error" className="error-message">{emailRef.current && emailRef.current.validity.valueMissing ? "Please enter your email" : emailRef.current && emailRef.current.validity.typeMismatch ? "Please enter a valid email" : ""}</p>

            <label htmlFor="res-date">Choose date <sup>*</sup></label>
            <input type="date" id="res-date" value={date} min={today} onChange={handleDateChange} required />

            <label htmlFor="res-time">Choose time <sup>*</sup></label>
            <select id="res-time" value={times} ref={timesRef} placeholder="Select a Time" 
                aria-label="Time" 
                aria-describedby="res-time-error"
                aria-invalid={timesRef.current && !timesRef.current.validity.valid ? "true" : null}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                inputMode="text"
                name="res-time"
                className="select-time"
                onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
              <p id="res-time-error" className="error-message">{timesRef.current && timesRef.current.validity.valueMissing ? "Please select a time" : ""}</p>

            <label htmlFor="guests">Number of guests <sup>*</sup></label>
            <input type="number" name="guests" placeholder="1" id="guests" ref={guestsRef} value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} required />
            <p id="guests-error" className="error-message">{guestsRef.current && guestsRef.current.validity.valueMissing ? "Please enter the number of guests" : guestsRef.current && guestsRef.current.value > 20 ? "Maximum number of guests is 20" : guestsRef.current && guestsRef.current.value < 1 ? "Minimum number of guests is 1" : ""}</p>

            <label htmlFor="occasion">Occasion <sup>*</sup></label>
            <select id="occasion" ref={occasionRef} placeholder="Select an Occasion" aria-label="Occasion" aria-describedby="occasion-error"
                aria-invalid={occasionRef.current && !occasionRef.current.validity.valid ? "true" : null}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                inputMode="text"
                name="occasion"
                className="select-occasion"
                value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                <option value="">Select an Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding Reception</option>
                <option>Others</option>
            </select>
            <p id="occasion-error" className="error-message">{occasionRef.current && occasionRef.current.validity.valueMissing ? "Please select an occasion" : ""}</p>

            <input type="submit" value="Make Your reservation" disabled={!formValid} />
        </form>
    );
}
