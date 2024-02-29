import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Highlights from './components/Highlights';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import ConfirmedBooking from './components/ConfirmedBooking';

import "./App.css";
// import {fetchAPI, submitAPI} from "./assets/mockAPI"

function App() {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        console.log(result)
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, action) {
        if (action.type === "update_times") {
            return {availableTimes: fetchAPI(new Date(action.payload))}
        }
        else
            return state; 
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return (
        <>
            <Navbar />
            <Routes> 
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Highlights />} />
                <Route path="/reservations" element={<Reservation availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ConfirmedBooking/> } />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
