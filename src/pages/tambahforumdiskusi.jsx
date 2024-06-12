import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../style/Tambahforumdiskusi.css';

const Tambahforumdiskusi = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <main>
      <div className="post-thread">
        <h2>Post Thread</h2>
        <input type="text" placeholder="Thread Title" />
        <textarea placeholder="Write your thread here..."></textarea>
        <div className="buttons">
          <button>Add Attachment</button>
          <button>Post Thread</button>
        </div>
      </div>
    </main>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default Tambahforumdiskusi;
