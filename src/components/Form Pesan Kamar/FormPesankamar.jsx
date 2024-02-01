import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/pesanKamar.css";

import { DateImage, BedImage } from "../../data/Data Images/DataImages";
import Swal from "sweetalert2";

export default function FormPesankamar() {
  const [jenisKamarOptions, setJenisKamarOptions] = useState([]);
  const namaCustomer = localStorage.getItem("username");

  const [formData, setFormData] = useState({
    nama: "",
    checkin: "",
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

      console.log(response.data.data);
      console.log("Fetched jenisKamarOptions:", jenisKamarOptions);

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

  const handleCheckinChange = (event) => {
    const checkinValue = event.target.value;
    setFormData({
      ...formData,
      checkin: checkinValue,
      checkout: "", // Reset nilai checkout saat checkin berubah
    });
  };

  const handleCheckoutChange = (event) => {
    const checkoutValue = event.target.value;
    if (formData.checkin && checkoutValue < formData.checkin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tanggal Check-Out tidak boleh lebih kecil dari tanggal Check-In",
      });
      return;
    }

    setFormData({
      ...formData,
      checkout: checkoutValue,
    });
  };

  const handleJenisKamarChange = (event) => {
    const selectedValue = event.target.value;
    const selectedJenisKamar = jenisKamarOptions.find(
      (option) => option.label === selectedValue
    );

    setFormData({
      ...formData,
      jenisKamar: selectedValue,
      hargaKamar: selectedJenisKamar?.price || 0,
    });

    console.log("HargaKamar", formData.hargaKamar);
  };

  const calculateTotalPrice = () => {
    const selectedJenisKamar = jenisKamarOptions.find(
      (option) => formData.jenisKamar === option.label
    );

    if (!selectedJenisKamar) {
      return "Invalid selected jenis kamar";
    }

    const hargaKamar = selectedJenisKamar.price;
    const durasi = calculateDuration(formData.checkin, formData.checkout);
    const total_price = hargaKamar * durasi;

    return `Rp ${total_price.toLocaleString()}`; // Mengembalikan total price dengan format mata uang
  };

  const calculateDuration = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDifference = checkoutDate - checkinDate;
    const durationInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return durationInDays;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.nama !== namaCustomer) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama Harus Sesuai Dengan username akun",
      });
      return;
    }

    if (!formData.nama) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama Harus Diisi",
      });
      return;
    }

    if (!formData.checkin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tanggal Check-In Harus Diisi",
      });
      return;
    }

    if (!formData.checkout) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tanggal Check-Out Harus Diisi",
      });
      return;
    }

    if (new Date(formData.checkout) <= new Date(formData.checkin)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tanggal Check-Out harus lebih besar dari tanggal Check-In",
      });
      return;
    }

    if (!formData.jenisKamar) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Jenis Kamar Harus Dipilih",
      });
      return;
    }

    const apiUrl = "https://web-hotel-rpl.my.id/api/check-out";
    const token = localStorage.getItem("token");

    const selectedJenisKamar = jenisKamarOptions.find(
      (option) => formData.jenisKamar === option.label
    );

    if (!selectedJenisKamar) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Jenis Kamar Tidak Valid",
      });
      return;
    }

    const hargaKamar = selectedJenisKamar.price;
    const durasi = calculateDuration(formData.checkin, formData.checkout); // Menghitung durasi
    const total_price = hargaKamar * durasi;
    const Jenis_Kamar = selectedJenisKamar.label;
    const requestData = {
      total_price,
      check_in: formData.checkin,
      jenisKamar: Jenis_Kamar,
      check_out: formData.checkout,
      duration_stay: durasi, // Menggunakan durasi yang telah dihitung
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(apiUrl, requestData, { headers });
      console.log("Response:", response.data);
      Swal.fire("SUCCESS", "Invoice Berhasil Di buat", "success").then(() => {
        window.location.href = "/detail-pesan";
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container my-form-container">
      <div className="top">Pemesanan Kamar</div>
      <div className="bottom">
        <div className="nama">
          <label htmlFor="nama">
            <input
              type="text"
              placeholder="Masukkan Nama"
              name="nama"
              value={formData.nama}
              onBlur={() => {
                if (formData.nama !== namaCustomer) {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Nama Harus Sesuai Dengan username akun",
                  });
                }
              }}
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
                onChange={handleCheckinChange}
              />
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
                onChange={handleCheckoutChange}
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
                onChange={handleJenisKamarChange}
              >
                <option value="">Pilih Kamar</option>
                {jenisKamarOptions.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {formData.nama === namaCustomer &&
          formData.checkin &&
          formData.checkout &&
          formData.jenisKamar && (
            <>
              <div className="Detail-harga">
                <span>Detail Harga</span>
              </div>
              <div className="form-footer">
                <div className="form-field">
                  <span>Harga Kamar : </span>
                  <span className="value">
                    Rp. {formData.hargaKamar.toLocaleString()}
                  </span>
                </div>
                <div className="form-field">
                  <span>Durasi Menginap : </span>
                  <span className="value">
                    {calculateDuration(formData.checkin, formData.checkout)}{" "}
                    hari
                  </span>
                </div>
                <div className="form-field">
                  <span>Total Price : </span>
                  <span className="value">{calculateTotalPrice()}</span>
                </div>
              </div>
            </>
          )}

        <div className="btn-formPesanan">
          <span className="btn-kirim" onClick={handleSubmit}>
            Kirim
          </span>
        </div>
      </div>
    </div>
  );
}
