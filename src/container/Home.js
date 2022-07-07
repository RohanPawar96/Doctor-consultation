import React, { useState, useEffect } from "react";
import Banner from "../assets/img/banner.png";
import WhatsAppLogo from "../assets/img/whatsapp-logo-1.png";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import axios from "axios";
import { getDateFormat } from "../utils/common";

function Home() {
  const date_format = new Date();
  const [appointments, setAppointments] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState(date_format);
  // eslint-disable-next-line
  const [service_id, setServiceID] = useState("");
  const [time, setTime] = useState([]);
  // eslint-disable-next-line
  const [date, setDate] = useState("");
  const [allValues, setAllValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    comment: "",
    time: "",
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(
        "https://h5vx3l2vwdiaobjnp3rp4hcyni0nkaid.lambda-url.ap-south-1.on.aws/"
      )
      .then((response) => {
        setAppointments(response.data);
        setServiceID(
          response.data.map((slots) => {
            return slots.service_id;
          })
        );
        appointments.length !== "null" &&
          // eslint-disable-next-line
          appointments.map((slot) => {
            // eslint-disable-next-line
            slot.service_slots.map((timing) => {
              setTime(timing.slots);
              setDate(timing.date);
            });
          });
      });
    // eslint-disable-next-line
  }, []);

  console.log(time);

  const submitHandler = () => {
    axios("https://cs-nr.kapiva.in/public/doc_consult/appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        Customer: {
          first_name: allValues.firstname,
          last_name: "test",
          email_id: allValues.email,
          cell_phone: allValues.contact,
          comment: allValues.comment,
          additional_fields: {
            "Generated from": "Postman",
          },
        },
        Appointment: {
          service_key: service_id,
          start_time:
            getDateFormat({ date: appointmentDate }) + "T" + allValues.time,
          // end_time: getDateFormat({ date: appointmentDate }) + "T" + { appointmentTime },
        },
      },
    })
      .then((response) => {
        window.location.reload();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // window.location.reload();
    alert("Button Clicked");
    // console.log(
    //   "start_time",
    //   getDateFormat({ date: appointmentDate }) + "T" + allValues.time
    // );
    // setAllValues("");
  };

  return (
    <div>
      <div className="banner">
        <img src={Banner} alt="" />
      </div>
      <div className="title">
        <p>Book a free ayurvedic consultation with experienced</p>
        <p className="single-line">
          <hr />
          doctors and nutritionists
          <hr />
        </p>
      </div>
      <div className="options">
        <h1>Choose Therapy</h1>
        <div className="therapys">
          <ul>
            <li>
              <button
                type="button"
                className="btn btn-outline-success btn-lg option-button"
              >
                <p className="buttons">Weight management</p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-outline-success btn-lg option-button"
              >
                <p className="buttons">Sexual wellness</p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-outline-success btn-lg option-button"
              >
                <p className="buttons">chronic conditions</p>
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button
                type="button"
                className="btn btn-outline-success btn-lg option-button"
              >
                <p className="buttons">Skin & Hair</p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-outline-success btn-lg option-button"
              >
                <p className="buttons">Digestion</p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-outline-success btn-lg option-button"
              >
                <p className="buttons">general wellness</p>
              </button>
            </li>
          </ul>
        </div>
        <hr />
        <div className="form">
          <div className="main">
            <TextField
              id="outlined-basic"
              label="Name"
              name="firstname"
              variant="outlined"
              onChange={changeHandler}
            />
          </div>
          <div className="form-1">
            <div className="name">
              <TextField
                id="outlined-basic"
                label="Contact no"
                name="contact"
                variant="outlined"
                inputProps={{ maxLength: 10 }}
                style={{ width: "35%", marginBottom: "3%" }}
                onChange={changeHandler}
              />
            </div>
            <div className="name">
              <TextField
                id="outlined-basic"
                label="Email ID"
                name="email"
                variant="outlined"
                style={{ width: "35%", marginBottom: "3%" }}
                onChange={changeHandler}
              />
            </div>
          </div>

          <p className="whatsapp-text">
            <input type="checkbox" />
            Get updates on <img src={WhatsAppLogo} alt="whatsapp" />
            <span>whatsapp</span> You may opt out anytime
          </p>
          <div className="main">
            <TextField
              id="outlined-multiline-flexible"
              label="Any Comments?"
              name="comment"
              multiline
              rows={5}
              style={{ width: "75%", borderRadius: "20px", marginBottom: "3%" }}
              onChange={changeHandler}
            />
          </div>
          <div className="date-time">
            <div className="date">
              <p className="date-time-text spacing">Choose A Slot</p>
              <p className="additional-text spacing date-height"></p>
              <div className="adjustment">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="date"
                    name="date"
                    value={appointmentDate}
                    inputFormat="MM/dd/yyyy"
                    onChange={setAppointmentDate}
                    renderInput={(date) => <TextField {...date} />}
                    formatDate="DD-MM-YYYY"
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="time">
              <p className="date-time-text ">
                Choose A Time for <br /> Appointment
              </p>
              <p className="additional-text time-height">
                (1 hour slots between 10 Am to 7pm )
              </p>
              <select
                name="time"
                id="time"
                defaultValue={""}
                onChange={changeHandler}
              >
                <option value={""}>none</option>
                {time.length !== null
                  ? time.map((t) => {
                      console.log(t);
                      return <option value={t}>{t}</option>;
                    })
                  : ""}
              </select>
            </div>
          </div>
        </div>
        <button className="submit-btn" onClick={() => submitHandler()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
