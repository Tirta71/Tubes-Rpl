import React from "react";
import Navbar from "../components/Navbar/navbar";
import FormPesankamar from "../components/Form Pesan Kamar/FormPesankamar";
import Footer from "../components/footer";

export default function FormCheckIn() {
  return (
    <div>
      <Navbar />
      <FormPesankamar />
      <Footer />
    </div>
  );
}
