import React, { useEffect, useState } from "react";
import "../../css/Kategori.css";
import kategoriKamarData from "../../data/Data Kamar/DataKamar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
export default function PemesananKamar() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Jumlah item yang ditampilkan per halaman
  const totalPages = Math.ceil(kategoriKamarData.length / itemsPerPage);

  // Menghitung indeks item yang ditampilkan pada halaman saat ini
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

  return (
    <div className="container-pesanKamar" data-aos="slide-up">
      {currentItems.map((kategori, index) => (
        <div key={index} className="container-pesan">
          <div className="head-kategori">
            <h1>PILIH KATEGORI KAMAR</h1>
          </div>
          <div className="container-kategori">
            <div className="container-image">
              <div className="image-kategori">
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

            <div className="price">
              <p>{kategori.price}</p>
            </div>

            <div className="pagination">
              <div
                className={`arrow-left ${currentPage === 1 ? "disabled" : ""}`}
                onClick={prevPage}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>

              <div className="ring-container">
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className={`ring ${
                      currentPage === pageIndex + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(pageIndex + 1)}
                  ></div>
                ))}
              </div>

              <div
                className={`arrow-right ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={nextPage}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
