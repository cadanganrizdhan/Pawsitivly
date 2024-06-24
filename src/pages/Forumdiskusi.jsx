import React, { useState } from 'react';
import Navbarw from '../components/Navbarw.jsx';
import Footer from '../components/Footer.jsx';
import '../style/Forumdiskusi.css';

const data = [
  { id: 1, title: 'Vaksinasi yang Dibutuhkan oleh Anjing Anda', views: 100, replies: 10, date: '2024-01-01', user: 'User1' },
  { id: 2, title: 'Panduan Memilih Makanan Terbaik untuk Kucing Anggora', views: 200, replies: 20, date: '2024-01-02', user: 'User2' },
  { id: 3, title: 'Alasan Anjing Sering Mengunyah atau Mencakar Furnitur', views: 300, replies: 30, date: '2024-01-03', user: 'User3' },
  { id: 4, title: 'Cara Mengatasi Perilaku Agresif pada Anjing dan Kucing', views: 400, replies: 40, date: '2024-01-04', user: 'User4' },
  { id: 5, title: 'Cara Mencegah Infestasi Parasit pada Hewan Peliharaan', views: 500, replies: 50, date: '2024-01-05', user: 'User5' },
  { id: 6, title: 'Tindakan Darurat: Apa yang Harus Dilakukan Jika Kucing Terkena Racun?', views: 600, replies: 60, date: '2024-01-06', user: 'User6' },
  { id: 7, title: 'Makanan Manusia yang Harus Dihindari oleh Anjing', views: 700, replies: 70, date: '2024-01-07', user: 'User7' },
  { id: 8, title: 'Tips dan Trik Merawat Bulu Anjing dan Kucing', views: 800, replies: 80, date: '2024-01-08', user: 'User8' },
  { id: 9, title: 'Frekuensi Mandi yang Ideal untuk Anjing dan Kucing', views: 900, replies: 90, date: '2024-01-09', user: 'User9' },
  { id: 10, title: 'Tindakan Darurat: Apa yang Harus Dilakukan Jika Kucing Terkena Racun?', views: 1000, replies: 100, date: '2024-01-10', user: 'User10' },
  { id: 11, title: 'Vaksinasi yang Dibutuhkan oleh Anjing Anda', views: 1100, replies: 110, date: '2024-01-11', user: 'User11' },
  { id: 12, title: 'Panduan Memilih Makanan Terbaik untuk Kucing Anggora', views: 1200, replies: 120, date: '2024-01-12', user: 'User12' },
  { id: 13, title: 'Alasan Anjing Sering Mengunyah atau Mencakar Furnitur', views: 1300, replies: 130, date: '2024-01-13', user: 'User13' },
  { id: 14, title: 'Cara Mengatasi Perilaku Agresif pada Anjing dan Kucing', views: 1400, replies: 140, date: '2024-01-14', user: 'User14' },
  { id: 15, title: 'Cara Mencegah Infestasi Parasit pada Hewan Peliharaan', views: 1500, replies: 150, date: '2024-01-15', user: 'User15' },
  { id: 16, title: 'Tindakan Darurat: Apa yang Harus Dilakukan Jika Kucing Terkena Racun?', views: 1600, replies: 160, date: '2024-01-16', user: 'User16' },
  { id: 17, title: 'Makanan Manusia yang Harus Dihindari oleh Anjing', views: 1700, replies: 170, date: '2024-01-17', user: 'User17' },
  { id: 18, title: 'Tips dan Trik Merawat Bulu Anjing dan Kucing', views: 1800, replies: 180, date: '2024-01-18', user: 'User18' },
  { id: 19, title: 'Frekuensi Mandi yang Ideal untuk Anjing dan Kucing', views: 1900, replies: 190, date: '2024-01-19', user: 'User19' },
  { id: 20, title: 'Tindakan Darurat: Apa yang Harus Dilakukan Jika Kucing Terkena Racun?', views: 2000, replies: 200, date: '2024-01-20', user: 'User20' },
];

const Forumdiskusi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Navbarw />
      <section id='forum-diskusi'>
        <div className="forum-diskusi-text">
          <h1><b>Profil</b></h1>
        </div>
      </section>
      <div className="forum-container">
        <div className="forum-header">
          <h2>Sharing is Caring</h2>
          <button className="add-post-button">+ New Post</button>
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
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{item.title}</td>
                <td>{item.views}</td>
                <td>{item.replies}</td>
                <td>{item.date}</td>
                <td>{item.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              className={currentPage === number + 1 ? 'active' : ''}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forumdiskusi;
