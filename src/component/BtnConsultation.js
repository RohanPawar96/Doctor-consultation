import React from "react";

function BtnConsultation() {
  return (
    <div className="dc-book-consulation">
      <button className="btn-book">
        <div className="btn-initial">
          <div className="btn-image">
            <img src="./img/dc-consult.png" alt="" />
          </div>
          <p className="btn-text">BOOK A FREE CONSULTATION</p>
        </div>
        <div className="btn-secondary">
          <img src="./img/right-arrow.png" alt="" />
        </div>
      </button>
    </div>
  );
}

export default BtnConsultation;
