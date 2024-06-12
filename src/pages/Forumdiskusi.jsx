import React, { useState } from 'react';
import Navbarw from '../components/Navbarw.jsx'
import Footer from '../components/Footer.jsx'
import '../style/Forumdiskusi.css'

const data = [
  // Dummy data for 20 items
  { id: 1, name: '1', title: '1', views: 100, replies: 10, date: '2024-01-01', user: 'User1' },
  { id: 2, name: '2', title: '2', views: 200, replies: 20, date: '2024-01-02', user: 'User2' },
  { id: 3, name: '3', title: '3', views: 300, replies: 30, date: '2024-01-03', user: 'User3' },
  { id: 4, name: '4', title: '4', views: 400, replies: 40, date: '2024-01-04', user: 'User4' },
  { id: 5, name: '5', title: '5', views: 500, replies: 50, date: '2024-01-05', user: 'User5' },
  { id: 6, name: '6', title: '6', views: 600, replies: 60, date: '2024-01-06', user: 'User6' },
  { id: 7, name: '7', title: '7', views: 700, replies: 70, date: '2024-01-07', user: 'User7' },
  { id: 8, name: '8', title: '8', views: 800, replies: 80, date: '2024-01-08', user: 'User8' },
  { id: 9, name: '9', title: '9', views: 900, replies: 90, date: '2024-01-09', user: 'User9' },
  { id: 10, name: '10', title: '10', views: 1000, replies: 100, date: '2024-01-10', user: 'User10' },
  { id: 11, name: '11', title: '11', views: 1100, replies: 110, date: '2024-01-11', user: 'User11' },
  { id: 12, name: '12', title: '12', views: 1200, replies: 120, date: '2024-01-12', user: 'User12' },
  { id: 13, name: '13', title: '13', views: 1300, replies: 130, date: '2024-01-13', user: 'User13' },
  { id: 14, name: '14', title: '14', views: 1400, replies: 140, date: '2024-01-14', user: 'User14' },
  { id: 15, name: '15', title: '15', views: 1500, replies: 150, date: '2024-01-15', user: 'User15' },
  { id: 16, name: '16', title: '16', views: 1600, replies: 160, date: '2024-01-16', user: 'User16' },
  { id: 17, name: '17', title: '17', views: 1700, replies: 170, date: '2024-01-17', user: 'User17' },
  { id: 18, name: '18', title: '18', views: 1800, replies: 180, date: '2024-01-18', user: 'User18' },
  { id: 19, name: '19', title: '19', views: 1900, replies: 190, date: '2024-01-19', user: 'User19' },
  { id: 20, name: '20', title: '20', views: 2000, replies: 200, date: '2024-01-20', user: 'User20' },
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
    <div><Navbarw/>
    </div>
    <section id='forum-diskusi'>
      <div className="forum-diskusi-text">
        <h1><b>Profil</b></h1>
      </div>
    </section>
    <div className="forum-container">
      <div className="forum-header">
        <h1>Sharing is Caring</h1>
        <button className="add-post-button">Tambah Post</button>
      </div>
      <div className="forum-list-container">
      <div className="forum-list-item" onClick={() => alert('Post clicked!')}>No</div>
      <div className="forum-list-item" onClick={() => alert('Rep clicked!')}>Title</div>
      <div className="forum-list-item" onClick={() => alert('App clicked!')}>Viwers</div>
      <div className="forum-list-item" onClick={() => alert('Post clicked!')}>Replies</div>
      <div className="forum-list-item" onClick={() => alert('Rep clicked!')}>Date</div>
      <div className="forum-list-item" onClick={() => alert('App clicked!')}>User</div>      
    </div>
      <div className="form-card-list">
        {currentItems.map(item => (
          <div className="form-card" key={item.id}>
            <div className="form-card-content">
              <ul>
                <li><h2>{item.id}</h2></li>
                <li><h2>{item.title}</h2></li>
                <li><h2>{item.views}</h2></li>
                <li><h2>{item.replies}</h2></li>
                <li><h2>{item.date}</h2></li>
                <li><h2>{item.user}</h2></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>1</button>
        <button onClick={() => handlePageChange(2)} disabled={currentPage === 2}>2</button>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Forumdiskusi
