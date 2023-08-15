import React, { useState, useEffect } from "react";
import "../../css/DetailPesnanKamar.css";

export default function FormDetailPesan() {
  const [pesanCards, setPesanCards] = useState([]);

  useEffect(() => {
    const fetchedData = [
      {
        id: 1,
        pesanan: "#PESANAN1",
        nama: "Tirta Samara",
        telepon: "123123123",
        status: true,
        waktu: "20:49",
        tanggal: "30 Desember 2023",
      },
      {
        id: 2,
        pesanan: "#PESANAN2",
        nama: "John Doe",
        telepon: "456456456",
        status: false,
        waktu: "22:15",
        tanggal: "31 Desember 2023",
      },
    ];

    setPesanCards(fetchedData);
  }, []);

  return (
    <div className="containerLuarPesanan">
      <div className="DetailPesanan">
        <h1>Detail Pesanan</h1>
      </div>
      <div className="container-detailPesan">
        {pesanCards.map((pesanCard) => (
          <div className="pesanCard" key={pesanCard.id}>
            <h1>{pesanCard.pesanan}</h1>
            <div className="corePesan">
              <h1>
                {pesanCard.nama} <br />
                {pesanCard.telepon}
              </h1>
              <div className="arrowNext">
                <p>Next</p>
              </div>
            </div>

            <div
              className="footerCard"
              style={{
                backgroundColor: pesanCard.status
                  ? "#b7eac2"
                  : "rgb(251, 80, 80)",
              }}
            >
              <p>{pesanCard.waktu}</p>
              <p>{pesanCard.tanggal}</p>
              {pesanCard.status ? "Sukses" : "Pending"}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
