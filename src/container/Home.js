import React, { useState, useEffect } from "react";
import Achievement from "../component/Achievement";
import Banner from "../component/Banner";
import BtnConsultation from "../component/BtnConsultation";
import DoctorCard from "../component/DoctorCard";
import Form from "../component/Form";
import Queries from "../component/Queries";
import Treatments from "../component/Treatments";
import axios from "axios";
import DoctorCardMobile from "../component/DoctorCardMobile";

function Home() {
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState([]);
  const [status, setStatus] = useState(""); //eslint-disable-line
  let UtmSorce = "";
  let UtmMedium = "";
  let queryString = window.location.search;
  if (queryString !== "") {
    UtmSorce = queryString.split("=")[1].split("&")[0];
    UtmMedium = queryString.split("&")[1].split("&")[0];
    UtmMedium = UtmMedium.split("=")[1];
  } else {
    UtmSorce = "";
    UtmMedium = "";
  }

  useEffect(() => {
    axios
      .get(
        "https://h5vx3l2vwdiaobjnp3rp4hcyni0nkaid.lambda-url.ap-south-1.on.aws/"
      )
      .then((response) => {
        setAppointments([...response.data]);
      }) //eslint-disable-line
      .catch((error) => {});

    axios
      .get("https://developer.setmore.com/api/v1/o/oauth2/token", {
        params: {
          refreshToken: "r1/cb72dbe0098HDmS_Ax0lw1FK4iDn3S0H056uWSl55q9vl",
        },
      })
      .then((response) => {
        setToken(response.data.data.token.access_token);
        setStatus(response.status);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="dc-consultation">
      <Banner />
      <div className="dc-consultation-form ">
        <h1>
          Ayurvedic consultation with experienced doctors and nutritionists
        </h1>
        <div className="dc-consultation-form-step-1">
          <Form
            appointments={appointments}
            UtmMedium={UtmMedium}
            UtmSorce={UtmSorce}
          />
        </div>
      </div>
      <div className="dc-doctor-details">
        <h3>
          MEET OUR TEAM OF EMPANELLED <br />
          <span style={{ fontWeight: 800 }}>AYURVEDIC DOCTORS</span>
        </h3>
        <div className="dc-doctor-cards">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
        <div class="dc-doctor-cards-mobile">
          <div class="mobile-slide">
            <DoctorCardMobile />
            <DoctorCardMobile />
            <DoctorCardMobile />
          </div>
        </div>
      </div>
      <h3 className="dc-acheivement-head">
        Our empanelled doctors have treated thousands of patients with:
      </h3>
      <div className="dc-acheivements">
        <div className="acheiventent">
          <div className="acheivement-img">
            <img src="./img/diabities.png" alt="" />
          </div>
          <p className="acheivement-description">
            <span className="bold">Diabetes</span> treated by <br /> Dr. Sheetal
            Verma
          </p>
        </div>
        <Achievement />
      </div>
      <BtnConsultation />
      <h3 className="dc-acheivement-head">
        Get the right treatment after an analysis of the root cause of your
        problems
      </h3>
      <div className="dc-treatments">
        <Treatments />
      </div>
      <div className="dc-consult-queries">
        <h3 className="dc-consult-head">
          Still not very clear with whom you need to consult?
        </h3>
        <p>
          Don’t worry, take this small online test to understand which
          consultation will benefit you.
        </p>
        <p className="green">Get a 100% Private and Free Online Test.</p>
        <div className="faq">
          <p>
            ONLINE AYURVEDIC CONSULTATION <br />
            <span className="bold">FAQs</span>
          </p>
        </div>
        <p>
          Feel free to connect with us if you have any questions which are not
          covered in the FAQs below.
        </p>
        <p className="green unl">Click Here - I have a question</p>
      </div>
      <div className="dc-selector">
        <Queries />
        <Queries />
        <Queries />
      </div>
      <div className="dc-why-kapiva">
        <h3 className="why-head">
          WHY <span className="bold">KAPIVA AYURVEDA?</span>
        </h3>
        <p>
          Kapiva has a team of experienced Ayurvedic practitioners and
          nutritionists who will guide you at every
          <br />
          step to get healthy and fit in a natural way.
        </p>
        <div className="dc-treatments">
          <Treatments />
        </div>
      </div>
      <BtnConsultation />
    </div>
  );
}

export default Home;
