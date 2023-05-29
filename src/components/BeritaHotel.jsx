import React from "react";

export default function BeritaHotel({
  showBanner,
  promoTitle,
  promoDescription,
  Gambar,
}) {
  return (
    <div className="conatiner-card-beranda">
      <div className="card-beranda">
        <div className="diskon">
          <h1>{promoTitle}</h1>
          <p>{promoDescription}</p>
        </div>
        <div className="container-diskon">
          {showBanner && (
            <div className="banner-diskon">
              <h2>
                Promo Diskon <br /> Kamar Hingga
              </h2>
              <span>25%</span>
              <div className="baner-bawah">
                <h2>
                  <span>Berlaku</span> s/d 20 MARET 2023
                </h2>
                <h3>Bandung</h3>
              </div>
            </div>
          )}
          <div className="gambar-diskon">
            <img src={Gambar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
