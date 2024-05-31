import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostThread from './components/PostThread';
import './style/tambahforumdiskusi.css';

const TambahForumDiskusi = () => {
  return (
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
  );
}

export default TambahForumDiskusi;
