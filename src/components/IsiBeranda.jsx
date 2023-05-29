import React from "react";
import "../css/Beranda.css";
import "../css/CustomCarousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BeritaHotel from "./BeritaHotel";
import Gambar1 from "../assets/images/image 1.png";
import Gambar2 from "../assets/images/image 2.png";
import Gambar3 from "../assets/images/image 3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function IsiBeranda() {
  const beritaHotelData = [
    {
      showBanner: true,
      promoTitle: "Promo Diskon",
      promoDescription:
        "Hotel Harmoni, di mana kenyamanan bertemu dengan keindahan, memberikan pengalaman menginap yang tak terlupakan, dan nikmati diskon booking kamar hingga 25%.",
      gambar: Gambar1,
    },
    {
      showBanner: false,
      promoTitle: "Hotel Harmoni",
      promoDescription:
        "Hotel Harmoni, destinasi ideal bagi para pelancong yang mencari keindahan dan kenyamanan dalam satu paket. Dalam suasana yang mewah dan romantis, Hotel Harmoni adalah tempat ideal untuk menghidupkan kembali api cinta Anda.",
      gambar: Gambar2,
    },
    {
      showBanner: false,
      promoTitle: "TEMPAT YANG STRATEGIS",
      promoDescription:
        "Terletak di lokasi yang memukau, hotel kami menawarkan pemandangan yang memukau dan akses mudah ke tempat-tempat wisata terkenal. Dengan lokasi yang strategis, hotel kami adalah tempat ideal untuk menjelajahi semua yang ditawarkan oleh kota ini.",
      gambar: Gambar3,
    },
  ];

  const renderCustomIndicator = (onClickHandler, isSelected, index) => {
    const indicatorClassName = `custom-indicator ${
      isSelected ? "selected" : ""
    }`;

    return (
      <div
        className={indicatorClassName}
        onClick={onClickHandler}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`Go to slide ${index + 1}`}
      />
    );
  };

  return (
    <section className="container Beranda">
      <div className="container-beranda">
        <Carousel renderIndicator={renderCustomIndicator}>
          {beritaHotelData.map((data, index) => (
            <BeritaHotel
              key={index}
              showBanner={data.showBanner}
              promoTitle={data.promoTitle}
              promoDescription={data.promoDescription}
              Gambar={data.gambar}
            />
          ))}
        </Carousel>
      </div>
      <div className="button-booking">
        <button>
          BOOKING SEKARANG
          <div className="right-icon">
            <FontAwesomeIcon icon={faChevronRight} />{" "}
          </div>
        </button>
      </div>
    </section>
  );
}
