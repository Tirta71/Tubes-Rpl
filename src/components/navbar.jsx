import React, { useState, useEffect, useRef } from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import AvatarProfile from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import Background from "../assets/BackroundDasar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Navbar() {
  const navStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1080px",
  };

  const location = useLocation();

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setProfileOpen(!isProfileOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav style={navStyle}>
        <div className="container container-navbar">
          <div className="logo">
            <span>LOGO</span>
            <div className="menu-icon" onClick={handleMenuClick}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
          <div className={`my-navbar ${isMenuOpen ? "open" : ""}`}>
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

          <div
            className={`profile ${isMenuOpen ? "open" : ""}`}
            ref={profileRef}
            onClick={handleProfileClick}
          >
            <div className="profile-img">
              <img src={AvatarProfile} alt="" />
            </div>
            <div className="profile-font">
              <span>Tirta Samara</span>
            </div>

            <div className="markdown-profile">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <TransitionGroup>
              {isProfileOpen && (
                <CSSTransition classNames="profile-dropdown" timeout={300}>
                  <div className="profile-dropdown">
                    <ul>
                      <li>
                        <Link to="/">Profile Detail </Link>
                      </li>

                      <li>
                        <Link to="/">Logout</Link>
                      </li>
                    </ul>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        </div>

        <Hero />
      </nav>
    </div>
  );
}
