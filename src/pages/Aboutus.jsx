import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Logo from '../assets/text1.png'
import '../style/Home.css'

const Beranda = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div>
      <section id="HomeAbout">
        <div className="home">
          <img src={Logo} alt=""/>
          <p>Temukan perawatan kesehatan hewan Anda di sini! Dengan layanan online kami, Anda dapat dengan mudah menjadwalkan janji temu dengan dokter hewan terpercaya, mencari informasi tentang perawatan hewan terkini, dan bergabung dengan komunitas pecinta hewan yang peduli</p>
          <a href="">
            <button className="btn1">Get Started</button>
          </a>
        </div>
      </section>

      <section id="Aboutus">
        <div className="home-left">
          <img src={Logo} alt=""/>
          <p>Temukan perawatan kesehatan hewan Anda di sini! Dengan layanan online kami, Anda dapat dengan mudah menjadwalkan janji temu dengan dokter hewan terpercaya, mencari informasi tentang perawatan hewan terkini, dan bergabung dengan komunitas pecinta hewan yang peduli</p>
          <a href="">
            <button className="btn1">Get Started</button>
          </a>
        </div>
      </section>

      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Beranda
