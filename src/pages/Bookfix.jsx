import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../style/Bookfix.css';
import Dr1 from '../assets/dr1.png';

const Bookfix = () => {
  const [formData, setFormData] = useState({
    nama: '',
    noHp: '',
    email: '',
    typeHewan: '',
    namaHewan: '',
    jenisKelaminHewan: '',
    ras: '',
    umur: '',
    berat: '',
    keluhan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section id='Bookfix'>
        <div className="fix">
        <h5><b>Book Appointment</b></h5>
        </div>
        <div className="bookfix-container">
          <div className="bookfix-grid">
            <div className="bookfix-left">
              <img src={Dr1} alt="" />
              <p>Rp. 50.000 <br />
                <b>DRH. Sri January</b><br />
                <span><b>Practice schedule : </b></span>08.00 - 20.00 <br />
                <span><b>Practice Place : </b></span>Batam Centre <br />
                <span><b>Experience : </b></span>5 years
              </p>
            </div>
            <div className="bookfix-right">
                <div className="fix-right">
                    <h5><b>Bill Detail</b></h5>
                </div>
              <form onSubmit={handleSubmit}>
                <label>
                  Nama: <br />
                  <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
                </label>
                <label>
                  No HP: <br />
                  <input type="text" name="noHp" value={formData.noHp} onChange={handleChange} required />
                </label>
                <label>
                  Email: <br />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                  Tipe Hewan: <br />
                  <input type="text" name="typeHewan" value={formData.typeHewan} onChange={handleChange} required />
                </label>
                <label>
                  Nama Hewan: <br />
                  <input type="text" name="namaHewan" value={formData.namaHewan} onChange={handleChange} required />
                </label>
                <label>
                  Jenis Kelamin Hewan: <br />
                  <input type="text" name="jenisKelaminHewan" value={formData.jenisKelaminHewan} onChange={handleChange} required />
                </label>
                <label>
                  Ras: <br />
                  <input type="text" name="ras" value={formData.ras} onChange={handleChange} required />
                </label>
                <label>
                  Umur: <br />
                  <input type="text" name="umur" value={formData.umur} onChange={handleChange} required />
                </label>
                <label>
                  Berat: <br />
                  <input type="text" name="berat" value={formData.berat} onChange={handleChange} required />
                </label>
                <label>
                  Keluhan: <br />
                  <input type="text" name="keluhan" value={formData.keluhan} onChange={handleChange} required />
                </label>
                <button className="btnfix">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Bookfix;
