import React from "react";

function DoctorCard() {
  return (
    <div className="dc-card">
      <div className="doctor-image">
        <img src="./img/image.png" alt="Doctor Image" />
      </div>
      <h2 className="doctor-name">Dr. Anand R Dwivedi</h2>
      <p className="doctor-detail">
        Ayurvedacharya, Mumbai University, 1987.
        <div className="doctor-experience">
          <p>
            <span className="green">Years of Experience</span>: 34 Yrs
          </p>
          <p>
            <span className="green">Specialization</span>: Diabetes, Skin & Hair
          </p>
          <p>
            <span className="green">Languages</span>: Hindi, English & Marathi
          </p>
        </div>
      </p>
      <p className="doctor-info">
        Dr. Anand R Dwivedi has been practicing Ayurveda since 1988. He has a
        special interest in the treatment of chronic illnesses with the help of
        Ayurveda. He has been associated with Kapiva since 2015, helping people
        lead a well-balanced lifestyle through his deep knowledge of Ayurveda.
      </p>
    </div>
  );
}

export default DoctorCard;