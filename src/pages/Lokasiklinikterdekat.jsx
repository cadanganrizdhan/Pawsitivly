import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import bgForm from './assets/bglist1.png';
import mapImg from './assets/map.png';
import locationIcon from './assets/v1.png';
import phoneIcon from './assets/v2.png';
import clockIcon from './assets/v3.png';
import calendarIcon from './assets/v4.png';
import Navbar from '../components/Navbar';
import '../style/Lokasiklinikterdekat.css'

const Lokasiklinikterdekat = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="app" style={{ backgroundImage: `url(${bgForm})` }}>
      <div className="title-container">
        <h1>Find the Vet and Petshop Near You!</h1>
      </div>
      <div className="container">
        <div className="left-column">
          <div className="search-container">
            <input type="text" placeholder="Search Location" />
            <select>
              <option value="all-categories">All Categories</option>
            </select>
          </div>
          <div className="directory">
            <h2>Directory: 2</h2>
            <div className="location">
              <h3>De'Chruse Pet Center Batam</h3>
              <p><img src={locationIcon} alt="Address" />Ruko Purie Loka, Jl Blk E No.3, Sungai Panas, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29433</p>
              <p><img src={phoneIcon} alt="Phone" />0813-9074-0508</p>
              <p><img src={clockIcon} alt="Hours" />09:00 am - 07:00 pm</p>
              <p><img src={calendarIcon} alt="Days" />Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
              <button>Directions</button>
            </div>
            <div className="location">
              <h3>Petshop & poultryshop by Klinik Hewan Waras Satwa</h3>
              <p><img src={locationIcon} alt="Address" />Komplek ruko bida asri indah blok b no 5, Belian, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29433</p>
              <p><img src={phoneIcon} alt="Phone" />0821-7227-8307</p>
              <p><img src={clockIcon} alt="Hours" />09:00 am - 08:00 pm</p>
              <p><img src={calendarIcon} alt="Days" />Mon, Tue, Wed, Thu, Fri, Sat</p>
              <button>Directions</button>
            </div>
          </div>
        </div>
        <div className="map">
          <img src={mapImg} alt="Map" />
        </div>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default Lokasiklinikterdekat;
