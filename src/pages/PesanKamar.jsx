import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/footer";
import PemesananKamar from "../components/Pesan Kamar/PesanKamar";

export default function PesanKamar() {
  return (
    <div>
      <Navbar />
      <PemesananKamar />
      <Footer />
    </div>
  );
}
