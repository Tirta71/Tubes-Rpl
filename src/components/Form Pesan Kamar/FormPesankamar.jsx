import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/pesanKamar.css";
import { durasiOptions } from "../../data/DataPesanKamar";
import {
  DateImage,
  MoonImage,
  BedImage,
} from "../../data/Data Images/DataImages";
import ButtonUsable from "../ButtonUsable";

export default function FormPesankamar() {
  const [jenisKamarOptions, setJenisKamarOptions] = useState([]);

  const [formData, setFormData] = useState({
    nama: "",
    checkin: "",
    durasi: "",
    checkout: "",
    jenisKamar: "",
  });

  useEffect(() => {
    fetchJenisKamarOptions();
  }, []);

  const fetchJenisKamarOptions = async () => {
    const apiUrl = "https://web-hotel-rpl.my.id/api/room-category";

    try {
      const response = await axios.get(apiUrl);
      const roomCategories = response.data.data;

      const jenisKamarOptions = roomCategories.map((category) => ({
        value: category.id,
        label: category.name,
        price: parseFloat(category.price),
      }));
      setJenisKamarOptions(jenisKamarOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "https://web-hotel-rpl.my.id/api/check-out";
    const token = localStorage.getItem("token"); // Ganti dengan token yang sesuai

    const selectedJenisKamar = jenisKamarOptions.find(
      (option) => option.value === formData.jenisKamar
    );

    if (!selectedJenisKamar) {
      console.error("Invalid selected jenis kamar");
      return;
    }

    const hargaKamar = selectedJenisKamar.price;
    const durasi = parseInt(formData.durasi);
    const total_price = hargaKamar * durasi;

    const requestData = {
      total_price,
      check_in: formData.checkin,
      check_out: formData.checkout,
      duration_stay: formData.durasi,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(apiUrl, requestData, { headers });
      console.log("Response:", response.data);
      // Lakukan sesuatu setelah permintaan POST berhasil
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container my-form-container">
      <div className="top">Pemesanan Kamar</div>
      <div className="bottom">
        <form onSubmit={handleSubmit}>
          <div className="nama">
            <label htmlFor="nama">
              <input
                type="text"
                placeholder="Masukkan Nama"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="container-form">
            <div className="checkin">
              <p>Check-In</p>
              <label htmlFor="checkin">
                <img src={DateImage} alt="" />
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="durasi">
              <label htmlFor="durasi">
                <p>Durasi</p>
                <img src={MoonImage} alt="" />
                <select
                  name="durasi"
                  id="durasi"
                  value={formData.durasi}
                  onChange={handleInputChange}
                >
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
                <input
                  type="date"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="type">
              <label htmlFor="jenisKamar">
                <p>Jenis Kamar</p>
                <img src={BedImage} alt="" />
                <select
                  name="jenisKamar"
                  id="jenisKamar"
                  value={formData.jenisKamar}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kamar
                  </option>
                  {jenisKamarOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
