import React from "react";
import "../css/footer.css";
import LogoFooter from "../assets/footer/Group 71.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container my-container">
        <div className="footer-logo">
          <img src={LogoFooter} alt="" />
        </div>
        <div className="footer-menu">
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Fasilitas</Link>
          </ul>
        </div>
        <div className="footer-sosmed">
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebookSquare} /> Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitterSquare} /> Twitter
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </li>
          </ul>
        </div>
        <div className="footer-form"></div>
      </div>
    </footer>
  );
}
