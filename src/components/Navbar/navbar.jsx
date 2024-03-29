import React, { useState, useEffect, useRef } from "react";
import "../../css/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AvatarProfile from "../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuItems } from "../../data/DataNavbar";
import { navStyle } from "../../data/NavStyle";

export default function Navbar() {
  const location = useLocation();

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMarkdownOpen, setMarkdownOpen] = useState(true);
  const profileRef = useRef(null);
  const isLoggedIn = localStorage.getItem("isLogged");
  const username = localStorage.getItem("username");

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
    setMarkdownOpen(!isMarkdownOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Hapus semua data dari localStorage saat logout
    localStorage.clear();
    // Redirect ke halaman login setelah logout
    window.location.href = "/login";
  };

  return (
    <div>
      <nav style={navStyle}>
        <div className="container container-navbar">
          <div className="logo">
            <span>LOGO</span>
            <div
              className={`menu-icon ${isMenuOpen ? "active" : "inactive"}`}
              onClick={handleMenuClick}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
          <div className={`my-navbar ${isMenuOpen ? "open" : ""}`}>
            <ul className="my-navbar-menu">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={
                      location.pathname === item.path ? "navbarActive" : ""
                    }
                  >
                    {item.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {isLoggedIn ? (
            <div
              className={`profile ${isMenuOpen ? "open" : ""}`}
              ref={profileRef}
              onClick={handleProfileClick}
            >
              <div className="profile-img">
                <img src={AvatarProfile} alt="" />
              </div>
              <div className="profile-font">
                <span>{username}</span>
              </div>

              <div
                className={`markdown-profile ${isMarkdownOpen ? "open" : ""}`}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </div>

              <TransitionGroup>
                {isProfileOpen && (
                  <CSSTransition classNames="profile-dropdown" timeout={300}>
                    <div className="profile-dropdown">
                      <ul>
                        <li>
                          <Link to="/profile-detail">Profile Detail </Link>
                        </li>
                        <li>
                          <Link to="/detail-pesan">Detail Pesanan</Link>
                        </li>
                        <li onClick={handleLogout}>
                          <Link to="/login">Logout</Link>
                        </li>
                      </ul>
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>
          ) : (
            <div
              className="Register-dulu"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              <span>Register</span>
            </div>
          )}
        </div>

        <Hero />
      </nav>
    </div>
  );
}
