import React from "react";

function Treatments() {
  return (
    <>
      <div className="treatment">
        <img
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/health-tech-doc-consult/img/ayruvedic.png"
          alt=""
        />
        <p className="treatment-text">Years of Ayurvedic experience</p>
      </div>
      <div className="treatment">
        <img
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/health-tech-doc-consult/img/consultation.png"
          alt=""
        />
        <p className="treatment-text">Successful online consultations</p>
      </div>
      <div className="treatment">
        <img
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/health-tech-doc-consult/img/treatment.png"
          alt=""
        />
        <p className="treatment-text">Highly qualified doctors empanelled</p>
      </div>
      <div className="treatment ">
        <img
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/health-tech-doc-consult/img/doctors.png"
          alt=""
          className="default-size"
        />
        <p className="treatment-text">Disease Treatment Available</p>
      </div>
    </>
  );
}

export default Treatments;
