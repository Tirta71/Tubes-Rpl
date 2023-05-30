import React from "react";
import "../css/pesanKamar.css";
import { durasiOptions, JenisKamar } from "../data/DataPesanKamar";
import { DateImage, MoonImage, BedImage } from "../data/Data Images/DataImages";
export default function FormPesankamar() {
  return (
    <div className="container my-form-container">
      <div className="top">Pemesanan Kamar</div>
      <div className="bottom">
        <div className="nama">
          <label htmlFor="username">
            <input type="text" placeholder="Masukkan Nama " />
          </label>
        </div>
        <div className="container-form">
          <div className="checkin">
            <p>Check-In</p>
            <label htmlFor="checkin">
              <img src={DateImage} alt="" />
              <input type="date" placeholder="Masukkan Nama Panjang" />
            </label>
          </div>
          <div className="durasi">
            <label htmlFor="durasi">
              <p>Durasi</p>

              <img src={MoonImage} alt="" />

              <select name="durasi" id="durasi">
                <option value="" disabled selected hidden>
                  Durasi menginap
                </option>
                {durasiOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="checkout">
            <p>Check-Out</p>
            <label htmlFor="checkout">
              <img src={DateImage} alt="" />
              <input type="date" />
            </label>
          </div>
          <div className="type">
            <label htmlFor="jenisKamar">
              <p>Jenis Kamar</p>
              <img src={BedImage} alt="" />
              <select name="jenisKamar" id="JenisKamar">
                <option value="" disabled selected hidden>
                  Pilih Kamar
                </option>
                {JenisKamar.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
