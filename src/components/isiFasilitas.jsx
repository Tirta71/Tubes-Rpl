import { useEffect } from "react";
import gambar1 from "../assets/fasilitas/Bar Tepi Kolam.png";
import gambar2 from "../assets/fasilitas/Kolam Renang.png";
import gambar3 from "../assets/fasilitas/Restoran.png";
import gambar4 from "../assets/fasilitas/Spa.png";
import "../css/fasilitas.css";
import ButtonUsable from "./ButtonUsable";
import AOS from "aos";
import "aos/dist/aos.css";

const DataFasilitas = [
  {
    gambar: gambar1,
    headline: "BAR TEPI KOLAM",
  },
  {
    gambar: gambar2,
    headline: "S P A",
  },
  {
    gambar: gambar3,
    headline: "KOLAM RENANG",
  },
  {
    gambar: gambar4,
    headline: "RESTORAN",
  },
];

export default function IsiFasilitas() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="container my-fasilitas mt-5">
      <header>
        <div className="fasilitas-header mt-5" data-aos="slide-up">
          <h1>Fasilitas</h1>
          <p>
            Nikmati fasilitas hotel kami yang luar biasa, yang dirancang untuk
            memenuhi setiap kebutuhan dan kenyamanan Anda. Kenyamanan Anda
            adalah prioritas utama kami, dan fasilitas hotel kami yang mewah
            akan memanjakan Anda dalam setiap detail.
          </p>
        </div>
      </header>
      <div className="fasilitas-list mt-5">
        {DataFasilitas.map((fasilitas, index) => (
          <div key={index} className="fasilitas-item" data-aos="fade-up">
            <img src={fasilitas.gambar} alt={`Fasilitas ${index + 1}`} />
            <h2>{fasilitas.headline}</h2>
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
