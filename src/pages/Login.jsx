import React from 'react'
import '../style/Login.css'
import Goolge from '../assets/google.png'

const Login = () => {
  return (
    <section id='login'>
    <div className="login-container">
      <div className="login-grid">
        <div className="login-title">
          <h1><b>Log in</b></h1>
          <p>Continue With : <img src={Goolge} alt="" />or</p>
        </div>
        <div className="login-email">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="login-password">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="login-button">
          <a href="BERANDA"><button>Login</button></a>
        </div>
        
        <div className="login-signup">
          <p>Don't have an account? <a href="Signup">Sign Up</a></p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Login