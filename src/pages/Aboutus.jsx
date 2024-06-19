import React from 'react';
import Footer from '../components/Footer.jsx';
import Imgabout from '../assets/imgabout.png';
import '../style/About.css';
import Navbarw from '../components/Navbarw.jsx';

const Aboutus = () => {
  return (
    <>
      <div>
        <Navbarw />
      </div>
      <section id="bio">
        <div className="text">
          <h1>
            <b>About Us</b>
          </h1>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <div className="home-left relative -left-5 ">
          <p className="text-left leading-8">
            Ilmu terbaik yang kami miliki sebagai modal untuk memperlakukan
            hewan peliharaan Anda dengan kasih sayang dan cinta adalah
            pengalaman. Srijan Vetcare Clinic telah melayani Anda selama lebih
            dari dua belas tahun, didukung oleh Srijan Pet Service,yang telah
            hadir untuk memenuhi kebutuhan dan kebutuhan hewan peliharaan Anda
            dengan kualitas terbaik. <br /> <br /> Klien kami adalah anggota masyarakat,
            pemilik, pecinta, dan partner hewan, yang berhak atas pelayanan
            terbaik untuk teman hidup paling setia mereka. Mereka adalah aset
            terpenting yang dimiliki oleh kami. <br /> <br /> Dengan menyediakan tempat kerja
            yang nyaman dan memiliki peralatan dan alat medis terkini, kami
            terus memperbaiki dan mengembangkan staf kami untuk selalu
            memberikan layanan yang lebih baik kepada pelanggan kami.
            <br />
          </p>
        </div>

        <img src={Imgabout} alt="img" className="w-full  object-contain" />
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
