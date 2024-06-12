import React, { useState } from 'react';
import '../style/Navbar.css';
import logo from "../assets/logo.png";
import '../style/Home.css';

const Navbar = () => {
    const [fix, setFix] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function setFixed() {
        if (window.scrollY > 10){
            setFix(true);
        } else {
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFixed);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header>
            <nav className={fix ? 'navbar fixed' : 'navbar'}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="BERANDA">Home</a></li>
                        <li><a href="Aboutus">About Us</a></li>
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <a href="">Service</a>
                            {dropdownOpen && (
                                <ul className="dropdown">
                                    <li><a href="Forumdiskusi">Forum Discussion</a></li>
                                    <li><a href="Listdokter">Online Consultation</a></li>
                                    <li><a href="Map">Nearest Vet and Petshop</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="Listblog">Blog</a></li>
                        <li><a href="Singup" className="btnnav">SIGN IN</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;