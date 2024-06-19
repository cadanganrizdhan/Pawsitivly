import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FAQ from '../components/FAQ.jsx';
import Logo1 from '../assets/text1.png';
import mail1 from '../assets/mail.png';
import Logo3 from '../assets/bg3.png';
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';
import artikel from '../assets/artikel.png';
import forum from '../assets/forum.png';
import loc from '../assets/loc.png';
import konsul from '../assets/konsul.png';
import bg2 from '../assets/background2.png';
import '../style/Home.css';

const Beranda = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <section id="BERANDA" className=" container mx-auto w-full">
        <div className="pt-[7rem] relative -left-5">
          <img src={Logo1} alt="text" className="pt-7 object-contain" />
          <p className="mt-7 mb-3 w-full pr-6 text-left leading-8 max-w-[36rem]">
            Temukan perawatan kesehatan hewan Anda di sini! Dengan layanan{' '}
            online kami, Anda dapat dengan mudah menjadwalkan janji temu dengan
            dokter hewan terpercaya, mencari informasi tentang perawatan hewan
            terkini, dan bergabung dengan komunitas pecinta hewan yang peduli
          </p>
          <a href="BERANDA">
            <button className="btn1">GET STARTED</button>
          </a>
        </div>
      </section>

      {/* Bagian Grid */}
      <section>
        <div className="text-grid pt-11 relative -left-5">
          <img
            src={bg2}
            alt="bg2"
            className="absolute top-0 left-0 -z-10 w-full object-cover"
          />
          <h1>What We Do</h1>
          <p className="text-center mb-9">
            For Yo<span className="under1">ur Pet</span>
          </p>
        </div>
        <div className="relative -left-5 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 border w-fit">
            <div className="border rounded-md border-slate-400 p-5 w-full md:max-w-[20rem]">
              <img src={artikel} alt="" />
              <a href="Listblog">
                <h4>Artikel</h4>
              </a>
              <p className="text-sm text-left">
                The articles here are useful for increasing insight into caring
                for and improving the welfare of cats and dogs
              </p>
            </div>
            <div className="border rounded-md border-slate-400 p-5 w-full md:max-w-[20rem]">
              <img src={forum} alt="" />
              <a href="Listdokter">
                <h4>Online Consultation</h4>
              </a>
              <p className="text-sm text-left">
                An online consultation was created to ask about problems that
                occur in our cats and dogs
              </p>
            </div>
            <div className="border rounded-md border-slate-400 p-5 w-full md:max-w-[20rem]">
              <img src={loc} alt="" />
              <a href="">
                <h4>Vet Vlinic Location</h4>
              </a>
              <p className="text-sm text-left">Batam city street?</p>
            </div>
            <div className="border rounded-md border-slate-400 p-5 w-full md:max-w-[20rem]">
              <img src={konsul} alt="" />
              <a href="Forumdiskusi">
                <h4>Discussion Forum</h4>
              </a>
              <p className="text-sm text-left">
                The discussion forum was created to share stories and respond to
                each other among dog and cat animal lovers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Easy */}
      <section
        id="Easy"
        className="container mx-auto flex flex-col  gap-5 md:gap-8 lg:flex-row relative -left-5 pt-[7rem]"
      >
        <img
          src={Logo3}
          alt="logo3"
          className="w-full max-w-[30rem] mx-auto object-cover"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">
            <b>Easy Pet Wellness</b>
          </h1>
          <h4 className="text-xl">
            Instant <span className="under2">Smil</span>es
          </h4>
          <p className="leading-8 mb-6 text-left">
            Kesejahteraan hewan peliharaan adalah kunci bagi kehidupan bahagia
            dan sehat mereka. Dengan memberikan perawatan yang memadai dan
            melakukan pemeriksaan kesehatan rutin, kita dapat meningkatkan
            kesejahteraan mereka dan melihat senyum bahagia terpancar dari wajah
            mereka sebagai balasan
          </p>
          <a href="">
            <button className="btn3 !text-base w-fit">Explore more</button>
          </a>
        </div>
      </section>

      <section id="Card" className="container mx-auto relative -left-5">
        <div className="card1">
          <div className="flex flex-col md:justify-between md:flex-row pb-10">
            <div className="mb-8">
              <h1 className="text-2xl">
                <span className="under4">
                  <b>Blog</b>
                </span>
              </h1>
            </div>
            <div className="max-w-[40rem]">
              <p className="text-left text-[.95em]">
                Temukan informasi berguna tentang perawatan hewan peliharaan di
                blog kami! Dari tips kesehatan hingga panduan perawatan, temukan
                semua yang Anda butuhkan untuk menjadi pemilik yan lebih baik
                bagi hewan kesayangan Anda. Segera kunjungi blog kami dan
                temukan artikel yang sesuai dengan kebutuhan Anda hari ini!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
            <div className="card-item-blog">
              <img src={Blog1} alt="" />
              <br />
              <p>
                Makanan-makanan berbahaya yang harus dihindari untuk hewan
                peliharaan Anda.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <h4>
                  <b>Makanan Berbahaya untuk Hewan Peliharaan</b>
                </h4>
                <a href="">
                  <button className="btn2 w-full md:w-fit">Read More</button>
                </a>
              </div>
            </div>
            <div className="card-item-blog ">
              <img src={Blog2} alt="" />
              <br />
              <p>
                Perawatan gigi pada hewan peliharaan untuk mencegah masalah
                kesehatan mulut yang serius.
              </p>
              <div className=" flex flex-col md:flex-row gap-4">
                <h4>
                  <b>Perawatan Gigi dan Mulut pada Hewan</b>
                </h4>
                <a href="">
                  <button className="btn2 w-full md:w-fit">Read More</button>
                </a>
              </div>
            </div>
            <div className="card-item-blog">
              <img src={Blog3} alt="" />
              <br />
              <p>
                Pastikan hewan peliharaan Anda mendapatkan vaksin yang
                diperlukan sesuai dengan jadwal yang direkomendasikan
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <h4>
                  <b>Pentingnya Vaksinasi untuk Hewan Peliharaan</b>
                </h4>
                <a href="">
                  <button className="btn2 !w-full md:w-fit">Read More</button>
                </a>
              </div>
            </div>
          </div>

          <div className="send">
            <div className="send-container flex flex-col md:flex-row gap-11 container mx-auto mt-[7rem]">
              <div className="form-container max-w-[40rem]">
                <h2>
                  <b>Send a Message</b>
                </h2>
                <form action="">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    required
                  />
                  <div className="flex justify-end mt-4">
                    <button type="submit">Next</button>
                  </div>
                </form>
              </div>
              <div className="text-container relative -left-5">
                <h1>
                  <b>Get In Touch!</b>
                </h1>
                <h7>
                  For every new <span className="under3">update</span> <br />{' '}
                  from us
                </h7>
                <p className="pt-5">
                  Tetap terhubung dengan kami untuk pembaruan terbaru! Temukan
                  layanan kesehatan hewan yang lengkap di situs kami. Dapatkan
                  informasi terbaru tentang kesehatan dan kesejahteraan hewan
                  peliharaan Anda. Segera kunjungi situs kami dan temukan solusi
                  lengkap untuk kebutuhan perawatan hewan peliharaan Anda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="email relative -left-5">
        <div className=" flex flex-col md:flex-row justify-evenly gap-5">
          <div className="sendemail">
            <img src={mail1} alt="" />
            <h2>
              <b>EMAIL</b>
              <br />
              <span className="text">nabilaabalqis@gmail.com</span>
            </h2>
          </div>
          <div className="sendemail">
            <img src={mail1} alt="" />
            <h2>
              <b>PHONE</b>
              <br />
              <span className="text">+6281261886309</span>
            </h2>
          </div>
        </div>
      </section>

      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Beranda;
