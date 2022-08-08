import React, { useState, useEffect } from "react";
import Achievement from "../component/Achievement";
import Banner from "../component/Banner";
import BtnConsultation from "../component/BtnConsultation";
import DoctorCard from "../component/DoctorCard";
import Form from "../component/Form";
import Queries from "../component/Queries";
import Treatments from "../component/Treatments";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import Experience from "../component/Experience";
import Header from "../component/Header";

function Home() {
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState([]);
  const [status, setStatus] = useState(""); //eslint-disable-line
  let ques = "";
  let ans = "";
  let val = "";
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
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

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
      <Header />
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
          <Carousel breakPoints={breakPoints}>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Anand R Dwivedi</h2>
                  <p className="doctor-detail">
                    Ayurvedacharya, Mumbai University, 1987.
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 34
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Diabetes,
                        Skin & Hair
                      </p>
                      <p>
                        <span className="green">Languages</span>: Hindi, English
                        & Marathi
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Anand R Dwivedi has been practicing Ayurveda since 1988. He
                has a special interest in the treatment of chronic illnesses
                with the help of Ayurveda. He has been associated with Kapiva
                since 2015, helping people lead a well-balanced lifestyle
                through his deep knowledge of Ayurveda.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Sheetal Verma</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 7
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Diabetes,
                        Skin & Hair
                      </p>
                      <p>
                        <span className="green">Languages</span>: Hindi &
                        English
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Sheetal has been working as an Ayurvedic physician for the
                last 7 years. She is working as a physician in the clinic and as
                a doctor in an ESIC dispensary giving medication of Ayurveda and
                allopathy. She has a great command over Ayurvedic practices like
                Panchkarma, Pathya, and Apathya. She is specifically good in the
                treatment of Obesity, GIT disorders, Renal and Gall bladder
                stones, skin and hair diseases, and Gynecological diseases.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Aswathy E.S.</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 34
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Diabetes,
                        Skin & Hair
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, English,
                        Malayalam & Kannada
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                10+ years of experience as an Ayurvedic consultant and medical
                officer in different nursing homes and hospitals. She has a deep
                knowledge of classical texts, Ayurvedic treatments, and
                Panchkarma. Dr. Aswathy is proficient in diagnosis through
                traditional Ayurvedic means and plans treatment that is specific
                to an individual’s constitution.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Ninny Sunny</h2>
                  <p className="doctor-detail">
                    Masters in Food Service Management and Dietetics
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 6
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Medical
                        Nutritionist
                      </p>
                      <p>
                        <span className="green">Languages</span>: Hindi &
                        English
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                With 6+ years of experience as a medical nutritionist, Nini
                Sunny has worked with hospitals and brands like HealthifyMe and
                CureFit to guide people on lifestyle and nutritional issues. She
                is an expert in evaluating the nutritional status of people and
                can advise a balanced nutritional plan for optimizing overall
                health and wellness.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Manjula P.Badiger</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 12
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>:
                        Panchkarma
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, English,
                        Telugu & Bengali
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Manjula has 12 years of experience in the field of Ayurveda
                and worked as a Consultant and General Physician for over 5
                years before starting her private practice. In addition to BAMS,
                she also has an Advanced Diploma in Clinical Research and is
                trained in Panchkarma. She is an expert at diagnosis of the root
                cause and planning effective treatment for multiple issues.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Irfan Ali</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 5
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Diabetes,
                        Skin & Hair
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, English,
                        Telugu & Bengali
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Irfan has over 5 years of experience as an Ayurvedic
                physician. He spent two years as House Physician in the Dept. Of
                Panchakarma including Atyika Chikitsa (Emergency Management). He
                was a Chief Instructor and Senior physician in the Panchakarma
                Dept. of Ayurjyoti Wellness Ayurveda. He is proficient at
                understanding the root cause of issues and recommends a holistic
                treatment approach suited to the individual.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Kalpana Dongare</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 13
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Ayurvedic
                        consultation & Allopathic treatment
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, English &
                        Marathi
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                With 13+ years of experience in Ayurvedic consultation &
                Allopathic treatment (ICU & General Hospital), Dr. Kalpana
                Dongare is adept in the treatment of infertility, PCOD, Joint
                disease, Skin diseases, etc with more than 95% patient follow up
                and more than 80% success rate. She is also an expert in all
                types of Panchkarma procedures.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Meena Sharma</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 8
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Ayurvedic
                        Consultation
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, English,
                        Dogri & Kannada
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Meena has 8+ years of experience in Ayurvedic treatments.
                She has conducted over 20 medical camps & has a good knowledge
                of Panchkarma and Gynaecology. She also has an understanding of
                yoga practices and is an expert in making Ayurvedic medicines as
                well.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Khwaja Mohammed Istiyaque</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 5
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Diabetes,
                        Skin & Hair
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, Hindi,
                        English & Bengali
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Khwaja has an experience of more than 5 years as an
                Ayurvedic vaidya in different centers. He has a good command of
                Ayurvedic practices like Panchkarma. He can understand the
                unique Ayurvedic constitution to recommend a personalized plan
                of treatment suited to the individual.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Dr. Shreyas Bharadwaj K</h2>
                  <p className="doctor-detail">
                    BAMS (Bachelors of Ayurvedic Medicine and Surgery)
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 8
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>:
                        Panchakarma Procedures
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, Hindi,
                        English, Kannada, Tulu, Tamil, Telugu & Malayalam
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Dr. Shreyas has 8+ years of experience as a Consultant Doctor &
                can treat patients with Ayurvedic medicines. He can handle all
                Panchkarma procedures with personalized guidance on daily diet
                and nutrition. He frequently conducts medical camps, awareness
                workshops, yoga, and meditation classes.
              </p>
            </div>
            <div className="dc-card">
              <div className="dc-card-mobile">
                <div className="doctor-image">
                  <img
                    src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/image.png"
                    alt="Doctor Image"
                  />
                </div>
                <div className="mobile-detail">
                  <h2 className="doctor-name">Anu Bahl</h2>
                  <p className="doctor-detail">
                    PG Diploma in Dietetics
                    <div className="doctor-experience">
                      <p>
                        <span className="green">Years of Experience</span>: 6
                        Yrs
                      </p>
                      <p>
                        <span className="green">Specialization</span>: Certified
                        Diabetic Educator
                      </p>
                      <p>
                        <span className="green">Languages</span>Hindi, English,
                        Gujarati & Punjabi.
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <p className="doctor-info">
                Anu Bahl is a certified nutritionist with 6 years of experience.
                She specializes in weight management and guides people towards
                positive lifestyle changes with customized diet plans.She is
                also a Certified Diabetic Educator and can help in diabetes
                lifestyle planning and management.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <h3 className="dc-acheivement-head">
        Our empanelled doctors have treated thousands of patients with:
      </h3>
      <div className="dc-acheivements">
        <div className="acheiventent">
          <div className="acheivement-img">
            <img
              src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/diabities.png"
              alt=""
            />
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
        <Queries
          val="1"
          ques={"What are the online Ayurvedic consultation charges?"}
          ans={
            "It is completely Free, there are no charges for your online Ayurvedic Consultation at Kapiva."
          }
        />
        <Queries
          val="2"
          ques={"Does Ayurveda work for all ages??"}
          ans={
            "It is completely Free, there are no charges for your online Ayurvedic Consultation at Kapiva."
          }
        />
        <Queries
          val="3"
          ques={"How fast is the medicine shipped?"}
          ans={
            "It is completely Free, there are no charges for your online Ayurvedic Consultation at Kapiva."
          }
        />
        <Queries
          val="4"
          ques={"Are Ayurvedic treatments safe?"}
          ans={
            "It is completely Free, there are no charges for your online Ayurvedic Consultation at Kapiva."
          }
        />
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
          <Experience />
        </div>
      </div>
      <BtnConsultation />
    </div>
  );
}

export default Home;
