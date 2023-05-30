import React from "react";
import "../css/pesanKamar.css";

export default function FormPesankamar() {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
  };

  const images = importAll(
    require.context("../assets/gambar", false, /\.(png|jpe?g|svg)$/)
  );

  const DateImage = images["./Date_range_light@3x.png"];
  const MoonImage = images["./Moon_alt_duotone@3x.png"];
  const BedImage = images["./pngwing.com.png"];

  const durasiOptions = [
    { value: "1 hari", label: "1 hari" },
    { value: "2 hari", label: "2 hari" },
    { value: "3 hari", label: "3 hari" },
    { value: "4 hari", label: "4 hari" },
    { value: "5 hari", label: "5 hari" },
    { value: "6 hari", label: "6 hari" },
    { value: "7 hari", label: "7 hari" },
    { value: "8 hari", label: "8 hari" },
    { value: "9 hari", label: "9 hari" },
    { value: "10 hari", label: "10 hari" },
  ];

  const JenisKamar = [
    { value: "Single", label: "Single" },
    { value: "Double", label: "Double" },
  ];

  return (
    <div className="container my-form-container">
      <div className="top">Pemesanan Kamar</div>
      <div className="bottom">
        <div className="nama">
          <label htmlFor="username">
            <input type="text" placeholder="Masukkan Nama Panjang" />
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
