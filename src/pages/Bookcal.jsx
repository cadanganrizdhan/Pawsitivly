import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Bookcal.css'
import Dr1 from '../assets/dr1.png'

const Bookcal = () => {
    const [date, setDate] = useState(new Date());

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <section id='Bookcal'>
      <div className="book-container">
      <div className="book-grid">
        <div className="book-left">
          <img src={Dr1} alt="" />
          <p>Rp. 50.000 <br />
          <b>DRH. Sri January</b><br />
          <span><b>Practice schedule : </b></span>08.00 - 20.00 <br />
          <span><b>Practice Place : </b></span>Batam Centre <br />
          <span><b>Experience : </b></span>5 years
          </p>
        </div>
        <div className="book-right">
          <Calendar
            onChange={setDate}
            value={date}
            className="calendar"
          />
        </div>
      </div>
    </div>
    </section>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Bookcal