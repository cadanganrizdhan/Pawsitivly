import React from 'react';
import '../style/Login.css';
import Goolge from '../assets/google.png';

const Login = () => {
  return (
    <section id="login" className="flex justify-center md:justify-end ]">
      <div className="w-full max-w-[30rem] pt-[5rem] mr-0 relative -left-6 md:mr-[7rem]">
        <div className="login-grid">
          <div className="login-title flex items-center flex-col gap-4">
            <h1>
              <b>Sign up</b>
            </h1>
            <p>Continue With :</p>
            <img src={Goolge} alt="" />
            <p>or</p>
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
            <a href="BERANDA">
              <button>Login</button>
            </a>
          </div>

          <div className="login-signup">
            <p>
              Don't have an account? <a href="Signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
