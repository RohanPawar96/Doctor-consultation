import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { showdateFormat, getDateFormat } from "../utils/common";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Buttons from "./Buttons";
import Popup from "./Popup";
import validator from "validator";

function Home() {
  const a = "AM";
  const b = "PM";
  const pattern = /^(d{3})s*d{3}(?:-|s*)d{4}$/;
  const todayTime = new Date();
  const date = new Date();
  const [slots, setSlots] = useState([]);
  const [submit, setSubmit] = useState("Submit");
  let hours = todayTime.getHours();
  hours = ("0" + hours).slice(-2);
  let minutes = todayTime.getMinutes();
  minutes = ("0" + minutes).slice(-2);
  let nowTime = `${hours}:${minutes}`;
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
  const convertAmpm = (_time) => {
    if (_time >= "10:00" && _time < "12:00") {
      return `${_time} AM`;
    } else {
      if (_time.split(":")[0] === "12") {
        return `${_time} PM`;
      } else {
        let int_time = parseInt(_time.split(":")[0]);
        int_time = int_time - 12;
        if (int_time < 12) {
          _time = int_time.toString().padStart(2, "0") + _time.substring(2);
        }

        return `${_time} PM`;
      }
    }
  };
  const [value, setValue] = React.useState(new Date());
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 14);
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState([]);
  let orderedList = [];
  const [filteredList, setFilteredList] = useState([]);
  // eslint-disable-next-line
  const [serviceId, setServiceID] = useState(""); //eslint-disable-line
  const [status, setStatus] = useState(""); //eslint-disable-line
  const [time, setTime] = useState([]);
  let slot_list = [];
  const [isactive, setIsActive] = useState(true); //eslint-disable-line
  // eslint-disable-next-line
  const [allValues, setAllValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    comment: "",
    time: "",
  });

  let date2 = value;
  let date1 = new Date();
  let diffDays = date2.getDate() - date1.getDate();
  let diffYears = date2.getFullYear() - date1.getFullYear();
  const changeHandler = (e) => {
    if (e.target.name == "time") {
      setAllValues({
        ...allValues,
        [e.target.name]: e.target.value.substring(0, 5),
      });
    } else {
      setAllValues({ ...allValues, [e.target.name]: e.target.value });
    }
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  const convertTime12to24fornowTime = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "12";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  function handleChange() {
    if (
      value.toLocaleDateString() < new Date().toLocaleDateString() ||
      (diffDays < 14 && diffYears !== 0)
    ) {
      alert("Please enter the valid Date");
    }
  }

  const SlotLoot = (timing) => {
    console.log(value.toLocaleDateString() === new Date().toLocaleDateString());
    timing.map((e) => {
      if (value.toLocaleDateString() === new Date().toLocaleDateString()) {
        if (convertTime12to24fornowTime(nowTime) < convertTime12to24(e)) {
          setFilteredList((fl) => [...fl, convertAmpm(e)]);
          slot_list.concat(filteredList);
        }
      } else {
        setFilteredList((fl) => [...fl, convertAmpm(e)]);
      }
    });
  };

  useEffect(() => {
    if (slots.length !== 0) {
      for (const i in slots) {
        if (slots[i]["date"] === getDateFormat({ date: value })) {
          setFilteredList([]);

          SlotLoot(slots[i].slots);

          break;
        }
      }
    }
  }, [slots, value]);

  const endTime = (endtime) => {
    var splitTime = endtime.split(":");
    var endTime = "";
    if (splitTime[1] === "40") {
      if (splitTime[0] === "12") {
        endTime = `01:00`;
      } else {
        endTime = `${(parseInt(splitTime[0]) + 1)
          .toString()
          .padStart(2, "0")}:00`;
      }
    } else {
      endTime = `${splitTime[0]}:${parseInt(splitTime[1]) + 20}`;
    }
    return endTime;
  };

  const endindex = endTime(allValues.time);

  useEffect(() => {
    axios
      .get(
        "https://h5vx3l2vwdiaobjnp3rp4hcyni0nkaid.lambda-url.ap-south-1.on.aws/"
      )
      .then((response) => {
        setAppointments([...response.data]);

        handleChange(value);
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
  }, [value]);

  const validateForm = () => {
    if (!serviceId) {
      document.getElementById("submit").style = "display: block";
      document.getElementById("submit").textContent =
        "Please Select Services...";
      // alert("Please Select Service");
    } else if (
      allValues.firstname === "" ||
      /\d/.test(allValues.firstname) === true
    ) {
      document.getElementById("submit").style = "display: none";
      document.getElementById("submit").textContent = "";
      document.getElementById("firstname").style = "display : block";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red !important";
    } else if (
      allValues.lastname === "" ||
      /\d/.test(allValues.lastname) === true
    ) {
      document.getElementById("services").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red";
      document.getElementById("lastname").style = "display : block";
      document.getElementById("lastnameblock").style =
        "border : 1px solid red !important";
    } else if (
      allValues.contact === "" ||
      allValues.contact.length !== 10 ||
      pattern.test(allValues.contact) ||
      allValues.contact.charAt(0) === "-"
    ) {
      document.getElementById("services").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : 1px solid red";
      document.getElementById("contact").style = "display : block";
      document.getElementById("contactblock").style =
        "border : 1px solid red !important";
    } else if (
      allValues.email === "" ||
      validator.isEmail(allValues.email) !== true
    ) {
      document.getElementById("services").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : 1px solid red";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : 1px solid red";
      document.getElementById("email").style = "display : block";
      document.getElementById("emailblock").style =
        "border : 1px solid red !important";
      // alert("Please enter valid email");
    } else if (
      value.toLocaleDateString() < new Date().toLocaleDateString() ||
      (diffDays < 14 && diffYears !== 0)
    ) {
      document.getElementById("services").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : 1px solid red";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : 1px solid red";
      document.getElementById("email").style = "display : none";
      document.getElementById("emailblock").style = "border : 1px solid red";
      // alert("Please enter the valid Date");
    } else if (allValues.time === "") {
      document.getElementById("services").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : 1px solid red";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : 1px solid red";
      document.getElementById("email").style = "display : none";
      document.getElementById("emailblock").style = "border : 1px solid red";
      // alert("Please enter time");
      document.getElementById("time").style = "display : block";
      document.getElementById("timeblock").style =
        "border : 1px solid red !important";
    } else {
      onChecked();
      document.getElementById("submit").style = "display: none";
      document.getElementById("submit").textContent = "";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : 1px solid red";
      document.getElementById("email").style = "display : none";
      document.getElementById("emailblock").style = "border : 1px solid red";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : 1px solid red";
      document.getElementById("time").style = "display : none";
      document.getElementById("timeblock").style = "border : 1px solid red";
      submitHandler();
    }
  };

  function onChecked() {
    let is_checked = document.getElementById("whatsapp");
    if (is_checked.checked) {
      axios("https://api.webengage.com/v1/accounts/~15ba20105/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 83ca9bef-1471-4e61-ba2e-4c2fde6e3300",
        },
        data: {
          userId: allValues.email,
          eventName: "dc_get_updates_on_whatsapp",
          eventData: { checked: 1 },
        },
      });
    } else {
      axios("https://api.webengage.com/v1/accounts/~15ba20105/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 83ca9bef-1471-4e61-ba2e-4c2fde6e3300",
        },
        data: {
          userId: allValues.email,
          eventName: "dc_get_updates_on_whatsapp",
          eventData: { checked: 0 },
        },
      });
    }
  }

  const submitHandler = () => {
    setSubmit("Submitting...");
    axios("https://cs-nr.kapiva.in/public/doc_consult/appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      data: {
        data: {
          Customer: {
            first_name: allValues.firstname,
            last_name: allValues.lastname,
            email_id: allValues.email,
            cell_phone: "+91" + allValues.contact,
            comment: allValues.comment,
            utm_source: UtmSorce,
          },
          Appointment: {
            service_key: serviceId,
            start_time:
              getDateFormat({ date: value }) + "T" + allValues.time + "Z",
            end_time: getDateFormat({ date: value }) + "T" + endindex + "Z",
          },
        },
      },
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error === "Slot not available") {
            document.getElementById("submit").style = "display: block";
            document.getElementById("submit").textContent =
              "Slot not Available";
          } else if (response.data.staff !== null) {
            setSubmit("Submit");
            setIsActive(true);
          } else {
            document.getElementById("submit").style = "display: block";
            document.getElementById("submit").textContent =
              "Appointment booking is unavailable please try again after some time";
          }
        }
      })
      .catch((error) => {
        if (error) {
          document.getElementById("submit").style = "display: block";
          document.getElementById("submit").textContent = "Slot not Available";
        }
      });
  };

  return (
    <div>
      {isactive && (
        <div className="popup-background">
          <Popup
            allValues={allValues}
            serviceId={serviceId}
            endindex={endindex}
            value={value}
            setIsActive={setIsActive}
            convertTime12to24={convertTime12to24}
          />
        </div>
      )}
      <div className="banner">
        <img
          src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/banner.png"
          alt=""
        />
      </div>
      <div className="title">
        <p>Ayurvedic consultation with experienced</p>
        <div className="inline">
          <hr />
          <p className="single-line">doctors and nutritionists</p>
          <hr />
        </div>
      </div>
      <div className="options">
        {status === 200 ? (
          <Buttons
            token={token}
            setServiceID={setServiceID}
            setValue={setValue}
            serviceId={serviceId}
            setSlots={setSlots}
          />
        ) : (
          "Loading......"
        )}
        <hr />
        <div className="form">
          <div className="name">
            <div className="detail">
              <input
                type="text"
                placeholder="First Name"
                id="firstnameblock"
                name="firstname"
                className="border"
                value={allValues.firstname}
                onChange={changeHandler}
                required
              />
              <p className="error" id="firstname">
                Enter Valid First Name...
              </p>
            </div>
            <div className="detail">
              <input
                type="text"
                id="lastnameblock"
                placeholder="Last Name"
                name="lastname"
                className="border"
                value={allValues.lastname}
                onChange={changeHandler}
                required
              />
              <p className="error" id="lastname">
                Enter Valid Last Name...
              </p>
            </div>
            <div className="detail">
              <input
                type="number"
                id="contactblock"
                placeholder="Contact No"
                name="contact"
                className="border"
                value={allValues.contact}
                onChange={changeHandler}
                required
              />
              <p className="error" id="contact">
                Enter Valid Contact...
              </p>
            </div>
            <div className="detail">
              <input
                type="email"
                placeholder="Email"
                id="emailblock"
                name="email"
                className="border"
                value={allValues.email}
                onChange={changeHandler}
                required
              />
              <p className="error" id="email">
                Enter Valid Email...
              </p>
            </div>
          </div>
          <p className="whatsapp-text">
            <input type="checkbox" name="whatsapp" id="whatsapp" />
            Get updates on
            <img
              src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/whatsapp-logo-1.png"
              alt="whatsapp"
            />
            <span>whatsapp</span> You may opt out anytime
          </p>
          <div className="main">
            <textarea
              placeholder="Comments ?"
              name="comment"
              value={allValues.comment}
              onChange={changeHandler}
            />
          </div>
          <div className="name">
            <div>
              <p className="date-time-text ">Choose A Date</p>
            </div>
            <div>
              <p className="date-time-text ">Choose A Slot</p>
            </div>

            <div className="date-adjustment">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="-"
                  inputFormat="dd/MM/yyyy"
                  style={{ fontSize: "23px" }}
                  value={value}
                  toolbarPlaceholder="Please select date"
                  placeholder="Please select date"
                  disablePast={true}
                  minDate={new Date()}
                  maxDate={futureDate}
                  disableToolbar
                  onChange={(value) => setValue(value)}
                  onAccept={handleChange}
                  onOpen={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="date-adjustment">
              <div className="detail">
                <select
                  name="time"
                  id="timeblock"
                  style={{ fontWeight: "500" }}
                  // autoComplete="off"
                  onChange={changeHandler}
                >
                  <option value={""}>None</option>
                  {filteredList.map((t) => {
                    return <option value={t}>{t}</option>;
                  })}
                </select>
                <p className="error" id="time">
                  Please select the slot...
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="error" id="submit"></p>
        <input
          onClick={() => validateForm()}
          type="submit"
          className="submit-btn"
          name={submit}
          value={submit}
        />
      </div>
    </div>
  );
}

export default Home;
