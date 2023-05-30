import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../css/khususButton.css";
import { useNavigate } from "react-router-dom";

export default function ButtonUsable() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const BookButton = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/pesan");
    }, 2000);
  };

  return (
    <div className="button-booking">
      <button onClick={BookButton} disabled={isLoading}>
        {isLoading ? (
          <div className="loading-icon" />
        ) : (
          <>
            BOOKING SEKARANG
            <div className="right-icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </>
        )}
      </button>
    </div>
  );
}
