import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PaginationPesan({
  currentPage,
  prevPage,
  totalPages,
  setCurrentPage,
  nextPage,
}) {
  return (
    <>
      <div className="pagination">
        <div
          className={`arrow-left ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        <div className="ring-container">
          {[...Array(totalPages)].map((_, pageIndex) => (
            <div
              key={pageIndex}
              className={`ring ${
                currentPage === pageIndex + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(pageIndex + 1)}
            ></div>
          ))}
        </div>

        <div
          className={`arrow-right ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={nextPage}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </>
  );
}
