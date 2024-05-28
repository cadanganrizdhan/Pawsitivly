import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Home.css'

const Beranda = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div>
      <div className="main-card">
        <h1>Meet Our Veterinarian!</h1>
        <div className="card-container">
          <div className="card">
            <img src="img/dr1.png" alt="Veterinarian 1" />
            <p><b>DRH. Sri January</b></p>
            <button className="btn">Learn More</button>
          </div>
          <div className="card">
            <img src="img/dr2.png" alt="Veterinarian 2" />
            <p><b>DRH. Abiv Yanto</b></p>
            <button className="btn">Learn More</button>
          </div>
          <div className="card">
            <img src="img/dr3.png" alt="Veterinarian 3" />
            <p><b>DRH. Yakti Novi</b></p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>

      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Beranda
