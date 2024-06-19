import React from 'react';
import '../style/Signup.css';
import Goolge from '../assets/google.png';

const Signup = () => {
  return (
    <section id="Signup" className="flex justify-center md:justify-end ]">
      <div className="w-full max-w-[30rem] pt-[5rem] mr-0 relative -left-6 md:mr-[7rem]">
        <div className="signup-grid">
          <div className="signup-title flex items-center flex-col gap-4">
            <h1>
              <b>Sign up</b>
            </h1>
            <p>Continue With :</p>
            <img src={Goolge} alt="" />
            <p>or</p>
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
            <input
              type="Confirmation"
              placeholder="Confirmation your password"
            />
          </div>
          <div className="signup-button my-8">
            <button>Sign up</button>
          </div>

          <div className="signup-signup">
            <p className="text-center">
              Don't have an account? <a href="Login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
