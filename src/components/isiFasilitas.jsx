import { useEffect } from "react";

import "../css/fasilitas.css";
import ButtonUsable from "./ButtonUsable";
import AOS from "aos";
import "aos/dist/aos.css";
import { DataFasilitas } from "../data/DataFasilitas";

export default function IsiFasilitas() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="container my-fasilitas mt-5">
      <header>
        <div className="fasilitas-container" data-aos="slide-up">
          <div className="fasilitas-head">
            <h1>FASILITAS</h1>
          </div>
          <div className="fasilitas-fill">
            <p>
              Nikmati fasilitas hotel kami yang luar biasa, yang dirancang untuk
              memenuhi setiap kebutuhan dan kenyamanan Anda. Kenyamanan Anda
              adalah prioritas utama kami, dan fasilitas hotel kami yang mewah
              akan memanjakan Anda dalam setiap detail.
            </p>
          </div>
        </div>
      </header>
      <div className="fasilitas-list mt-5">
        {DataFasilitas.map((fasilitas, index) => (
          <div key={index} className="fasilitas-item" data-aos="fade-up">
            <img src={fasilitas.gambar} alt={`Fasilitas ${index + 1}`} />

            <div className="content-headline">
              <h2>{fasilitas.headline}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-fasilitas" data-aos="fade-down">
        <span>
          “Jangan ragu untuk menghubungi kami dan nikmati semua fasilitas yang
          kami tawarkan di hotel kami yang luar biasa ini!"
        </span>
        <ButtonUsable />
      </div>
    </div>
  );
}
