import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Isiblog.css'

const Isiblog = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div>
        <p>ISI BLOG</p>
      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Isiblog