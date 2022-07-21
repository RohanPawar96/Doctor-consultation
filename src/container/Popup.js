import React from "react";
import { getDateFormat, showdateFormat } from "../utils/common";
import axios from "axios";

const Popup = ({
  allValues,
  serviceId,
  value,
  endindex,
  setIsActive,
  convertTime12to24,
}) => {
  let endTime = "";
  let startTime = "";

  const convertAmpm = (time) => {
    if (time >= "10:00" && time < "12:00") {
      return `${time} AM`;
    } else if (time >= "12:00" && time <= "12:40") {
      return `${time} PM`;
    } else if (time >= "01:00" && time < "10:00") {
      return `${time} PM`;
    }
  };

  endTime = convertAmpm(endindex);
  startTime = convertAmpm(allValues.time);

  const submitHandler = () => {
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
          if (response.data.staff !== null) {
            alert("Appointment booked Successfully...");
            setIsActive(false);
            window.location.reload();
          } else {
            if (response.data.error !== null) {
              alert(response.data.error);
            } else {
              alert(
                "Appointment booking is unavailable please try again after some time"
              );
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="popup">
      <img
        className="popup-close"
        on
        src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/content/health-tech-doc-consult/img/close.svg"
        onClick={() => setIsActive(false)}
        alt="close"
      />
      <ul className="popup-ul">
        <li>First Name</li>
        <li>{allValues.firstname}</li>
        <li>last Name</li>
        <li>{allValues.lastname}</li>
        <li>Contact No</li>
        <li>{allValues.contact}</li>
        <li>Email</li>
        <li>{allValues.email}</li>
        <li>Appointment Date</li>
        <li>{showdateFormat({ date: value })}</li>
        <li>Appointment Time</li>
        <li>{allValues.time}</li>
      </ul>
      <button className="popup-submit-button" onClick={() => submitHandler()}>
        Submit
      </button>
    </div>
  );
};

export default Popup;
