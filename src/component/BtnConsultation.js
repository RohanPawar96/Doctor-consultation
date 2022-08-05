import React from "react";

function BtnConsultation() {
  return (
    <div className="dc-book-consulation">
      <a href="#form">
        <button className="btn-book">
          <div className="btn-initial">
            <div className="btn-image">
              <img
                src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/dc-consult.png"
                alt=""
              />
            </div>
            <p className="btn-text">BOOK A FREE CONSULTATION</p>
          </div>
          <div className="btn-secondary">
            <img src="./img/right-arrow.png" alt="" />
          </div>
        </button>
      </a>
    </div>
  );
}

export default BtnConsultation;
