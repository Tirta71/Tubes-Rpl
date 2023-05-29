import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../css/khususButton.css";
import { useNavigate } from "react-router-dom";
export default function ButtonUsable() {
  const navigate = useNavigate();
  const BookButton = () => {
    navigate("/pesan");
  };
  return (
    <div className="button-booking">
      <button onClick={BookButton}>
        BOOKING SEKARANG
        <div className="right-icon">
          <FontAwesomeIcon icon={faChevronRight} />{" "}
        </div>
      </button>
    </div>
  );
}
