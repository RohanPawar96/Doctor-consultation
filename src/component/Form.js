import React, { useState, useEffect } from "react";
import Therapys from "./Therapys";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import validator from "validator";
import axios from "axios";
import {
  convertTime12to24,
  convertTime12to24fornowTime,
  convertAmpm,
  getDateFormat,
  endTime,
} from "../utils/common";

const Form = ({ appointments, UtmMedium, UtmSorce }) => {
  const [value, setValue] = useState(new Date());
  const [submit, setSubmit] = useState("Submit");
  const [filteredList, setFilteredList] = useState([]);
  const [serviceId, setServiceID] = useState(""); //eslint-disable-line
  const [slots, setSlots] = useState([]);
  const [allValues, setAllValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    comment: "",
    time: "",
  });
  let slot_list = [];
  let futureDate = new Date();
  const pattern = /^(d{3})s*d{3}(?:-|s*)d{4}$/;
  const todayTime = new Date();
  let date2 = value;
  let date1 = new Date();
  let diffDays = date2.getDate() - date1.getDate();
  let diffYears = date2.getFullYear() - date1.getFullYear();
  futureDate.setDate(futureDate.getDate() + 14);
  let hours = todayTime.getHours();
  hours = ("0" + hours).slice(-2);
  let minutes = todayTime.getMinutes();
  minutes = ("0" + minutes).slice(-2);
  let nowTime = `${hours}:${minutes}`;
  let endindex = "";
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

  function handleSubmit(event) {
    event.preventDefault();
    if (!serviceId) {
      document.getElementById("service").style = "display: block";
      document.getElementById("service").textContent =
        "Please Select Services...";
    } else if (
      allValues.firstname === "" ||
      /\d/.test(allValues.firstname) === true
    ) {
      //   document.getElementById("service").style = "display: none";
      //   document.getElementById("submit").textContent = "";
      document.getElementById("firstname").style = "display : block";
      document.getElementById("firstnameblock").style =
        "border : 1px solid red !important";
    } else if (
      allValues.lastname === "" ||
      /\d/.test(allValues.lastname) === true
    ) {
      document.getElementById("service").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style = "border : none";
      document.getElementById("lastname").style = "display : block";
      document.getElementById("lastnameblock").style =
        "border : 1px solid red !important";
    } else if (
      allValues.contact === "" ||
      allValues.contact.length !== 10 ||
      pattern.test(allValues.contact) ||
      allValues.contact.charAt(0) === "-"
    ) {
      document.getElementById("service").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style = "border : none";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : none";
      document.getElementById("contact").style = "display : block";
      document.getElementById("contactblock").style =
        "border : 1px solid red !important";
    } else if (
      allValues.email === "" ||
      validator.isEmail(allValues.email) !== true
    ) {
      document.getElementById("service").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style = "border : none";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : none";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : none";
      document.getElementById("email").style = "display : block";
      document.getElementById("emailblock").style =
        "border : 1px solid red !important";
      // alert("Please enter valid email");
    } else if (
      value.toLocaleDateString() < new Date().toLocaleDateString() ||
      (diffDays < 14 && diffYears !== 0)
    ) {
      document.getElementById("service").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style = "border : none";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : none";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : none";
      document.getElementById("email").style = "display : none";
      document.getElementById("emailblock").style = "border : none";
      // alert("Please enter the valid Date");
    } else if (allValues.time === "") {
      document.getElementById("services").style = "display : none";
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style = "border : none";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : none";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : none";
      document.getElementById("email").style = "display : none";
      document.getElementById("emailblock").style = "border : none";
      // alert("Please enter time");
      document.getElementById("time").style = "display : block";
      document.getElementById("timeblock").style =
        "border : 1px solid red !important";
    } else {
      onChecked();
      document.getElementById("firstname").style = "display : none";
      document.getElementById("firstnameblock").style = "border : none";
      document.getElementById("lastname").style = "display : none";
      document.getElementById("lastnameblock").style = "border : none";
      document.getElementById("email").style = "display : none";
      document.getElementById("emailblock").style = "border : none";
      document.getElementById("contact").style = "display : none";
      document.getElementById("contactblock").style = "border : none";
      document.getElementById("time").style = "display : none";
      document.getElementById("timeblock").style = "border : none";
      submitHandler();
    }
  }

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

  endindex = endTime(allValues.time);

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
            utm_medium: UtmMedium,
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
            alert("Appointment Booked Successfully....");
            setSubmit("Submit");
            setAllValues({
              ...allValues,
              firstname: "",
              lastname: "",
              email: "",
              contact: "",
              comment: "",
              time: "",
            });
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

  useEffect(() => {
    if (slots) {
      for (const i in slots) {
        if (slots[i]["date"] === getDateFormat({ date: value })) {
          setFilteredList([]);
          SlotLoot(slots[i].slots);
          break;
        }
      }
    }
  }, [slots, value]);

  return (
    <form id="form" className="row g-3" onSubmit={handleSubmit}>
      <h3>Step 1: Personal Details</h3>
      <div className="dc-form">
        <div>
          <input
            type="text"
            placeholder="Enter your First Name"
            name="firstname"
            id="firstnameblock"
            value={allValues.firstname}
            onChange={changeHandler}
            required
          />
          <p className="error" id="firstname">
            Enter Valid First Name...
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lastname"
            id="lastnameblock"
            value={allValues.lastname}
            onChange={changeHandler}
            required
          />
          <p className="error" id="lastname">
            Enter Valid First Name...
          </p>
        </div>
        <div>
          <input
            type="number"
            min="1"
            maxLength="10"
            placeholder="Enter your Contact"
            name="contact"
            id="contactblock"
            value={allValues.contact}
            onChange={changeHandler}
            required
          />
          <p className="error" id="contact">
            Enter Valid Contact...
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            id="emailblock"
            value={allValues.email}
            onChange={changeHandler}
            required
          />
          <p className="error" id="email">
            Enter valid Contactt...
          </p>
        </div>
      </div>
      <div className="dc-whatsapp-tick">
        <input type="checkbox" id="whatsapp" />
        <label htmlFor="whatsapp">
          Get updates on WhatsApp. You may opt out anytime
        </label>
      </div>
      <h3>
        Step 2: Pick your therapy <p className="error" id="service"></p>
      </h3>
      <div className="dc-therepys">
        {appointments &&
          appointments.map((service) => {
            return (
              <Therapys
                service={service}
                setSlots={setSlots}
                setServiceID={setServiceID}
                slots={slots}
              />
            );
          })}
      </div>
      <h3>Tell us more about your concern</h3>
      <input type="text" id="concern" placeholder="Optional" />
      <h3>Step 2: Pick your therapy</h3>
      <div className="dc-form">
        <div className="date">
          <label htmlFor="date">Select a Date</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="-"
              id="date"
              inputFormat="dd/MM/yyyy"
              value={value}
              toolbarPlaceholder="Please select date"
              placeholder="Please select date"
              disablePast={true}
              minDate={new Date()}
              maxDate={futureDate}
              disableToolbar
              onChange={(value) => setValue(value)}
              InputProps={{
                disableUnderline: true,
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="time">
          <label htmlFor="date">Select a Date</label>
          <div>
            <select
              name="time"
              id="timeblock"
              // autoComplete="off"
              value={allValues.time}
              defaultValue={""}
              onChange={changeHandler}
            >
              <option value={""}>None</option>
              {filteredList.map((t) => {
                return <option value={t}>{t}</option>;
              })}
            </select>
            <p className="error" id="time">
              Select the slot...
            </p>
          </div>
        </div>
      </div>
      <div className="dc-form-submit">
        <input type="Submit" value={submit} />
      </div>
    </form>
  );
};

export default Form;
