import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Logo1 from '../assets/text1.png'
import Logo2 from '../assets/bg2.png'
import Logo3 from '../assets/bg3.png'
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import '../style/Home.css'

const Beranda = () => {
  return (
    <>
    <div>
      
    </div>
      <div>
      <Navbar/>
        {/* Bagian Beranda */}
      <section id="BERANDA">
        <div className="home-left">
          <img src={Logo1} alt=""/>
          <p>Temukan perawatan kesehatan hewan Anda di sini! Dengan layanan online kami, Anda dapat dengan mudah menjadwalkan janji temu dengan dokter hewan terpercaya, mencari informasi tentang perawatan hewan terkini, dan bergabung dengan komunitas pecinta hewan yang peduli</p>
          <a href="">
            <button className="btn1">Get Started</button>
          </a>
        </div>
        <div className="home-right">
          <img src={Logo2} alt=""/>
            </div>
      </section>

       {/* Bagian Grid */}
      <section id='Grid'>
        <div className="text">
          <h1>What We Do</h1>
          <p>For Yo<span class="under1">ur Pet</span></p>
        </div>
        <div className="grid-left">
          <div className="grid-container">
            <div className="grid-item">
              <img src="" alt="" />
              <br/>
              <h4>Artikel</h4>
                <p>The articles here are useful for increasing insight into caring for and improving the welfare of cats and dogs</p>
            </div>
            <div className="grid-item">
              <img src="" alt="" />
              <br/>
              <h4>Online Consultation</h4>
                    <p>An online consultation was created to ask about problems that occur in our cats and dogs</p>
            </div>
            <div className="grid-item">
              <img src="" alt="" />
              <br/>
              <h4>Vet Vlinic Location</h4>
                    <p>Batam city street?</p>
            </div>
            <div className="grid-item">
              <img src="" alt="" />
              <br/>
              <h4>Discussion Forum</h4>
                    <p>The discussion forum was created to share stories and respond to each other among dog and cat animal lovers</p>
            </div>
          </div>
        </div>
      </section>

       {/* Bagian Easy */}
       <section id="Easy">
        <div className="easy-left">
          <img src={Logo3} alt=""/>
        </div>

        <div className="easy-right">
            <h1>Easy Pet Wellness</h1>
            <h4>Instant <span class="under2">Smil</span>es</h4>
            <p>Kesejahteraan hewan peliharaan adalah kunci bagi kehidupan bahagia dan sehat mereka. Dengan memberikan perawatan yang memadai dan melakukan pemeriksaan kesehatan rutin, kita dapat meningkatkan kesejahteraan mereka dan melihat senyum 
                <br/>bahagia terpancar dari wajah mereka sebagai balasan</p>
            <a href="">
              <button className="btn1">Explore more</button>
            </a>
        </div>
    </section>

    <section id='Card'>
      <div className="blog-container">
        <div className="blog-left">
          <h1>Blog</h1>
        </div>
        <div className="blog-right">
        <p>Temukan informasi berguna tentang perawatan hewan peliharaan di blog kami! Dari tips kesehatan hingga panduan perawatan, temukan semua yang Anda butuhkan untuk menjadi pemilik yang lebih baik bagi hewan kesayangan Anda. Segera kunjungi blog kami dan temukan artikel yang sesuai dengan kebutuhan Anda hari ini!</p>
        </div>
      </div>

      <div className="card-container">
        <div className="card-item">
          <img src={Blog1} alt="" />
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <div className="blog-text">
              <h4>Artikel</h4>
                <a href="">
                  <button className="btn2">View Work</button>
                </a>
            </div>
        </div>
        <div className="card-item">
          <img src={Blog2} alt="" />
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <div className="blog-text">
              <h4>Artikel</h4>
                <a href="">
                  <button className="btn2">View Work</button>
                </a>
            </div>
        </div>
        <div className="card-item">
          <img src={Blog3} alt="" />
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <div className="blog-text">
              <h4>Artikel</h4>
                <a href="">
                  <button className="btn2">View Work</button>
                </a>
            </div>
        </div>
      </div>

      <div className="send">
        <div className="send-container">
          <div className="form-container">
          <h2>Send Message</h2>
          <form action="">
            <input type="text" name='name' placeholder='Full Name' required />
            <input type="email" name='email' placeholder='Email' required />
            <input type="message" name='message' rows="4" placeholder='Message' required />
            <button type='submit'>Send</button>
          </form>
          </div>
        <div className="text-container">
          <h1>Get In Touch!</h1>
          <h7>For every new <span className="under3">update</span> <br/> from us</h7>
          <p>Tetap terhubung dengan kami untuk pembaruan terbaru! Temukan layanan kesehatan hewan yang lengkap di situs kami. Dapatkan informasi terbaru tentang kesehatan dan kesejahteraan hewan peliharaan Anda. Segera kunjungi situs kami dan temukan solusi lengkap untuk kebutuhan perawatan hewan peliharaan Anda!</p>
        </div>
        </div>
      </div>
    </section>

    <section className="email">
        <div className="sende">
            <div className="sendemail">
                <h2>Card 1</h2>
                <p>This is the first card.</p>
            </div>
            <div className="sendemail">
                <h2>Card 2</h2>
                <p>This is the second card.</p>
            </div>
        </div>
    </section>

      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Beranda
