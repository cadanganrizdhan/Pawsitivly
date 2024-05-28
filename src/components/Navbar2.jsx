import React from 'react'
import '../style/Navbar.css'
import logo from "../assets/logo.png";
import '../style/About.css'

const Navbar = () => {
  return (
    <div className="header">
        <div className="main-container">
            <div className="nav">
                <div className="logo">
                    <img src="" alt="" />
                </div>
            
            <nav>
                <ul>
                    <li><a href="landing.html">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="">
                        <button class="btn">SIGN IN</button>
                        </a></li>
                </ul>
            </nav>
            </div>
        </div>

        <div className="text">
            <h2>About me</h2>
        </div>
    </div>

  )
}

export default Navbar