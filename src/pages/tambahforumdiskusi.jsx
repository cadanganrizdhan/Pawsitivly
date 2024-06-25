import React from 'react';
import Navbarw from '../components/Navbarw.jsx';
import Footer from '../components/Footer.jsx';
import '../style/Tambahforumdiskusi.css';

const Tambahforumdiskusi = () => {
  return (
    <>
    <div>
      <Navbarw/>
    </div>
    <section id='tambah-forum-diskusi'>
      <div className="tambah-forum-diskusi-text">
        <h1><b>Discussion Forum</b></h1>
      </div>
    </section>
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
