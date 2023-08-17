import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/DetailPesnanKamar.css";

export default function FormDetailPesan() {
  const [pesanCards, setPesanCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Ganti dengan token yang sesuai
    const apiUrl = "https://web-hotel-rpl.my.id/api/customer-order";

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setPesanCards(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <div className="containerLuarPesanan">
      <div className="DetailPesanan">
        <h1>Detail Pesanan</h1>
      </div>
      <div className="container-detailPesan">
        {pesanCards.map((pesanCard) => (
          <div className="pesanCard" key={pesanCard.id}>
            <h1>{pesanCard.invoice_number}</h1>
            <div className="corePesan">
              <div className="content-invoice">
                <h1>
                  Nama : {pesanCard.customer.name}
                  <br />
                  Pembayaran : {pesanCard.payment_type}
                </h1>
              </div>
              <div className="arrowNext">
                <p onClick={() => openModal(pesanCard)}>Next</p>
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
              <p>{pesanCard.date}</p>
              <p>{pesanCard.tanggal}</p>
              {pesanCard.status}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <h1>Detail Pesanan {selectedOrder.invoice_number}</h1>

            <p>Nama: {selectedOrder.customer.name}</p>
            <p>No Hp: {selectedOrder.customer.phone_number} </p>
            <p>Check-In: {selectedOrder.check_in}</p>
            <p>Check-Out: {selectedOrder.check_out}</p>
            <p>Durasi Mengingap: {selectedOrder.order_detail.duration_stay} </p>
            <p>Pembayaran : {selectedOrder.payment_type}</p>
            <p>Total Harga: {selectedOrder.total_price.toLocaleString()}</p>
            <h3>Room INFO</h3>
            {selectedOrder.room &&
              selectedOrder.order_detail.room.room_number && (
                <p>
                  room_number: {selectedOrder.order_detail.room.room_number}
                </p>
              )}

            <span className="button_close_modal" onClick={closeModal}>
              Close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
