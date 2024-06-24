import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Listdokter from "./pages/Listdokter";
import Signup from "./pages/Signup";
import Forumdiskusi from "./pages/Forumdiskusi";
import Isiblog from "./pages/Isiblog";
import Listblog from "./pages/Listblog";
import Bookcal from "./pages/Bookcal";
import Booktime from "./pages/Booktime";
import Bookfix from "./pages/Bookfix";
import Tambahforumdiskusi from "./pages/Tambahforumdiskusi";
import Login from "./pages/Login";
import Profil from "./components/Profil";
import Profilpost from "./pages/Profilpost";
import Profilrep from "./pages/Profilrep";
import Profileapp from "./pages/Profileapp";
import Isiblog2 from "./pages/Isiblog2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BERANDA" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Listdokter" element={<Listdokter />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forumdiskusi" element={<Forumdiskusi />} />
        <Route path="/Isiblog" element={<Isiblog />} />
        <Route path="/Listblog" element={<Listblog />} />
        <Route path="/Bookcal" element={<Bookcal />} />
        <Route path="/Booktime" element={<Booktime />} />
        <Route path="/Bookfix" element={<Bookfix />} />
        <Route path="/Tambahforumdiskusi" element={<Tambahforumdiskusi />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Profilpost" element={<Profilpost />} />
        <Route path="/Profilrep" element={<Profilrep />} />
        <Route path="/Profileapp" element={<Profileapp/>} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Lokasiklinikterdekat" element={<Lokasiklinikterdekat />} />
      </Routes>
    </Router>
  );
}

export default App;
