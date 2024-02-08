import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Routes> 
          <Route path="/" element={<><Hero /><Highlights /><Testimonials /></>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Highlights />}></Route>
          <Route path="/reservations" element={<Reservation />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
