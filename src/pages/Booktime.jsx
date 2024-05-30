import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Booktime.css'
import Dr1 from '../assets/dr1.png'

const Booktime = () => {
    const [date, setDate] = useState(new Date());

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <section id='Booktime'>
        <div className="time-container">
      <div className="time-grid">
        <div className="time-left">
            <img src={Dr1} alt="" />
            <p>Rp. 50.000 <br />
          <b>DRH. Sri January</b><br />
          <span><b>Practice schedule : </b></span>08.00 - 20.00 <br />
          <span><b>Practice Place : </b></span>Batam Centre <br />
          <span><b>Experience : </b></span>5 years
          </p>
        </div>
        <div className="time-right">
          <DateTimePicker
            onChange={setDate}
            value={date}
            className="datetime-picker"
            format="y-MM-dd h:mm a"
            disableClock={true}
            hourPlaceholder="hh"
            minutePlaceholder="mm"
            clearIcon={null}
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

export default Booktime