import React from 'react'
import '../style/Navbar.css'
import logo from "../assets/logo.png";
import '../style/Home.css'

const Navbar = () => {
  return (
    <nav className='flex- between'>
    <div class="wrapper">
    <div className="logo">
        <img src={logo} alt=""/>
    </div>
        <div class="menu">
            <ul>
                <li><a href="BERANDA">Home</a></li>
                <li><a href="#Aboutus">About Us</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="" class="btnnav">SIGN IN</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar