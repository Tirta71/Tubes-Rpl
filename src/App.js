import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Fasilitas from "./pages/Fasilitas";
import PesanKamar from "./pages/PesanKamar";
import DetailPesanan from "./pages/DetailPesanan";
import FormCheckIn from "./pages/FormCheckIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/pesan" element={<PesanKamar />} />
        <Route path="/detail-pesan" element={<DetailPesanan />} />
        <Route path="/pesan-kamar" element={<FormCheckIn />} />
      </Routes>
    </Router>
  );
};

export default App;
