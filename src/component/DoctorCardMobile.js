import React from "react";

function DoctorCardMobile() {
  var myIndex = 0;
  carousel();
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
  }
  return (
    <>
      <div class="mySlides mobile-view dc-card">
        <div class="doctor-mobile">
          <div class="doctor-image">
            <img
              src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
              alt="Doctor Image"
            />
          </div>
          <div class="doctor-info">
            <h2 class="doctor-name">Dr. Ranii R Dwivedi</h2>
            <p class="doctor-detail">
              Ayurvedacharya, Mumbai University, 1987.
              <div class="doctor-experience">
                <p>
                  <span class="green">Years of Experience</span>: 34 Yrs
                </p>
                <p>
                  <span class="green">Specialization</span>: Diabetes, Skin &
                  Hair
                </p>
                <p>
                  <span class="green">Languages</span>: Hindi, English & Marathi
                </p>
              </div>
            </p>
          </div>
        </div>

        <p class="doctor-info">
          Dr. Anand R Dwivedi has been practicing Ayurveda since 1988. He has a
          special interest in the treatment of chronic illnesses with the help
          of Ayurveda. He has been associated with Kapiva since 2015, helping
          people lead a well-balanced lifestyle through his deep knowledge of
          Ayurveda.
        </p>
      </div>
      <div class="mySlides mobile-view dc-card">
        <div class="doctor-mobile">
          <div class="doctor-image">
            <img
              src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
              alt="Doctor Image"
            />
          </div>
          <div class="doctor-info">
            <h2 class="doctor-name">Dr. sdsads R Dwivedi</h2>
            <p class="doctor-detail">
              Ayurvedacharya, Mumbai University, 1987.
              <div class="doctor-experience">
                <p>
                  <span class="green">Years of Experience</span>: 34 Yrs
                </p>
                <p>
                  <span class="green">Specialization</span>: Diabetes, Skin &
                  Hair
                </p>
                <p>
                  <span class="green">Languages</span>: Hindi, English & Marathi
                </p>
              </div>
            </p>
          </div>
        </div>

        <p class="doctor-info">
          Dr. Anand R Dwivedi has been practicing Ayurveda since 1988. He has a
          special interest in the treatment of chronic illnesses with the help
          of Ayurveda. He has been associated with Kapiva since 2015, helping
          people lead a well-balanced lifestyle through his deep knowledge of
          Ayurveda.
        </p>
      </div>{" "}
      <div class="mySlides mobile-view dc-card">
        <div class="doctor-mobile">
          <div class="doctor-image">
            <img
              src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
              alt="Doctor Image"
            />
          </div>
          <div class="doctor-info">
            <h2 class="doctor-name">Dr. sadasda R Dwivedi</h2>
            <p class="doctor-detail">
              Ayurvedacharya, Mumbai University, 1987.
              <div class="doctor-experience">
                <p>
                  <span class="green">Years of Experience</span>: 34 Yrs
                </p>
                <p>
                  <span class="green">Specialization</span>: Diabetes, Skin &
                  Hair
                </p>
                <p>
                  <span class="green">Languages</span>: Hindi, English & Marathi
                </p>
              </div>
            </p>
          </div>
        </div>

        <p class="doctor-info">
          Dr. Anand R Dwivedi has been practicing Ayurveda since 1988. He has a
          special interest in the treatment of chronic illnesses with the help
          of Ayurveda. He has been associated with Kapiva since 2015, helping
          people lead a well-balanced lifestyle through his deep knowledge of
          Ayurveda.
        </p>
      </div>
    </>
  );
}

export default DoctorCardMobile;
