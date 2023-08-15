import React, { useEffect, useState } from "react";
import "../../css/Kategori.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PaginationPesan from "../Pagination/PaginationPesan";

export default function PemesananKamar() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const [kategoriKamarData, setKategoriKamarData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [roomImages, setRoomImages] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
    fetchRoomCategories();
    fetchRoomImages();
  }, []);

  const fetchRoomCategories = async () => {
    try {
      const response = await fetch(
        "https://web-hotel-rpl.my.id/api/room-category"
      );
      const data = await response.json();
      setKategoriKamarData(data.data);
      setTotalPages(Math.ceil(data.data.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching room categories:", error);
    }
  };

  const fetchRoomImages = async () => {
    try {
      const response = await fetch(
        "https://web-hotel-rpl.my.id/api/room-image"
      );
      const data = await response.json();
      setRoomImages(data.data);
      console.log("images", data);
    } catch (error) {
      console.error("Error fetching room images:", error);
    }
  };

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

  const PagePesanKamar = () => {
    window.location.href = "/pesan-kamar";
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kategoriKamarData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="container-pesanKamar" data-aos="slide-up">
      {currentItems.map((roomCategory, index) => {
        console.log("Room Images:", roomImages);
        console.log("Room ID:", roomCategory.room[0].id);

        const matchingImage = roomImages.find(
          (image) => parseInt(image.room_id) === roomCategory.room[0].id
        );
        console.log("Matching Image:", matchingImage);

        return (
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
                  {matchingImage && (
                    <img
                      src={`https://web-hotel-rpl.my.id/storage/room/image/${matchingImage.url_image}`}
                      alt=""
                    />
                  )}
                </div>
                <div className="image-title">
                  <h2>{roomCategory.name}</h2>
                </div>
                <div className="list-fasilitas">
                  <ul>
                    {roomCategory.facility.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="price"
                onClick={PagePesanKamar}
                style={{ cursor: "pointer" }}
              >
                <p>RP. {parseInt(roomCategory.price).toLocaleString()}</p>
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
        );
      })}
    </div>
  );
}
