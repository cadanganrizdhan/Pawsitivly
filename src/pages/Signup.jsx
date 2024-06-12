import React from 'react'
import '../style/Signup.css'
import Goolge from '../assets/google.png'

const Signup = () => {
  return (
    <section id='Signup'>
    <div className="signup-container">
      <div className="signup-grid">
        <div className="signup-title">
          <h1><b>Sing up</b></h1>
          <p>Continue With : <img src={Goolge} alt="" />or</p>
        </div>
        <div className="signup-nama">
          <label>Name:</label>
          <input type="Name" placeholder="Enter your name" />
        </div>
        <div className="signup-email">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="signup-password">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="signup-Confirmation">
          <label>Confirmation Password:</label>
          <input type="Confirmation" placeholder="Confirmation your password" />
        </div>
        <div className="signup-button">
          <button>Sing up</button>
        </div>
        
        <div className="signup-signup">
          <p>Don't have an account? <a href="Login">Log in</a></p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Signup