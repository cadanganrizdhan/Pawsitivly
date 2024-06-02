import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Logo from '../assets/text1.png'
import './forumdiskusi.css';

const Beranda = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div className="forum-header">
        <h2>Sharing is Caring</h2>
        <a href="#" className="new-post-btn">+ New Post</a>
      </div>

      <table className="forum-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Views</th>
            <th>Replies</th>
            <th>Date</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Vaksinasi yang Dibutuhkan oleh Anjing Anda</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Panduan Memilih Makanan Terbaik untuk Kucing Anggora</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Alasan Anjing Sering Mengunyah atau Mencakar Furnitur</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cara Mengatasi Perilaku Agresif pada Anjing dan Kucing</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Cara Mencegah Infestasi Parasit pada Hewan Peliharaan</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Tindakan Darurat: Apa yang Harus Dilakukan Jika Kucing Terkena Racun?</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Makanan Manusia yang Harus Dihindari oleh Anjing</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Tips dan Trik Merawat Bulu Anjing dan Kucing</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Frekuensi Mandi yang Ideal untuk Anjing dan Kucing</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Tindakan Darurat: Apa yang Harus Dilakukan Jika Kucing Terkena Racun?</td>
            <td>25</td>
            <td>10</td>
            <td>25/10/2023</td>
            <td>Username</td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>&gt;</button>
      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Forumdiskusi;
