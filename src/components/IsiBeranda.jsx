import { useEffect } from "react";
import "../css/Beranda.css";
import "../css/CustomCarousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BeritaHotel from "./BeritaHotel";
import { beritaHotelData } from "../data/DataHotel";
import ButtonUsable from "./ButtonUsable";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IsiBeranda() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

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
    <section className="container Beranda" data-aos="slide-up">
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
      <ButtonUsable />
    </section>
  );
}
