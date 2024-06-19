import React, { useState } from 'react';
import '../style/Profil.css';
import dr1 from '../assets/dr1.png';

const Profil = () => {
  return (
    <>
      <section id="profil">
        <div className="profile-menu flex flex-col md:flex-row">
          <div className="profile-info">
            <img src={dr1} alt="Profile" className="profile-photo" />
            <div className="profile-details">
              <h2 className="profile-name">
                <b>Srijan Abivyakti</b>
              </h2>
              <p className="profile-email">@SA.ILBatch6</p>
              <p className="profile-join-date">Joined May 2023</p>
              <p className="profile-posts">Jumlah Post: 3</p>
            </div>
          </div>
          <button className="edit-profile-button">Edit Profil</button>
        </div>
      </section>
      <div className="profil-container">
        <a href="Profilpost" className="profil-list-item">
          <b>Posts</b>
        </a>
        <a href="Profilrep" className="profil-list-item">
          <b>Replies</b>
        </a>
        <a href="Profileapp" className="profil-list-item">
          <b>Appointment</b>
        </a>
      </div>
    </>
  );
};

export default Profil;
