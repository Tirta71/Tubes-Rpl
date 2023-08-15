import React, { useEffect, useState } from "react";
import "../../css/Kategori.css";
import kategoriKamarData from "../../data/Data Kamar/DataKamar";

import AOS from "aos";
import "aos/dist/aos.css";
import PaginationPesan from "../Pagination/PaginationPesan";
export default function PemesananKamar() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Jumlah item yang ditampilkan per halaman
  const totalPages = Math.ceil(kategoriKamarData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kategoriKamarData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Mengganti halaman
  const nextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage < totalPages) {
        return prevPage + 1;
      } else {
        return prevPage;
      }
    });
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      } else {
        return prevPage;
      }
    });
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const PagePesanKamar = () => {
    window.location.href = "/pesan-kamar";
  };

  return (
    <div className="container-pesanKamar" data-aos="slide-up">
      {currentItems.map((kategori, index) => (
        <div key={index} className="container-pesan">
          <div className="head-kategori">
            <h1>PILIH KAMAR</h1>
          </div>
          <div className="container-kategori">
            <div className="container-image">
              <div
                className="image-kategori"
                onClick={PagePesanKamar}
                style={{ cursor: "pointer" }}
              >
                <img src={kategori.image} alt="" />
              </div>
              <div className="image-title">
                <h2>{kategori.title}</h2>
              </div>
              <div className="list-fasilitas">
                <ul>
                  {kategori.fasilitas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="price"
              onClick={PagePesanKamar}
              style={{ cursor: "pointer" }}
            >
              <p>{kategori.price}</p>
            </div>

            <PaginationPesan
              currentPage={currentPage}
              prevPage={prevPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              nextPage={nextPage}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
