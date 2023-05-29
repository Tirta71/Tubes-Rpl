import React from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import AvatarProfile from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import Background from "../assets/BackroundDasar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";

export default function Navbar() {
  const navStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1080px",
  };

  const location = useLocation();

  return (
    <div>
      <nav style={navStyle}>
        <div className="container container-navbar">
          <div className="logo">
            <span>LOGO</span>
          </div>
          <div className="my-navbar">
            <ul className="my-navbar-menu">
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "navbarActive" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/fasilitas"
                  className={
                    location.pathname === "/fasilitas" ? "navbarActive" : ""
                  }
                >
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link
                  to="/pesan"
                  className={
                    location.pathname === "/pesan" ? "navbarActive" : ""
                  }
                >
                  Pemesanan Kamar
                </Link>
              </li>
            </ul>
          </div>

          <div className="profile">
            <div className="profile-img">
              <img src={AvatarProfile} alt="" />
            </div>
            <div className="profile-font">
              <span>Tirta Samara</span>
            </div>
            <div className="markdown-profile">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>

        <Hero />
      </nav>
    </div>
  );
}
