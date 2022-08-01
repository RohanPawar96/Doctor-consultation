import React from "react";
import { showdateFormat } from "../utils/common";

const Popup = ({ allValues, value, setIsActive }) => {
  const converTime = (time) => {
    let hour = time.split(":")[0];
    let min = time.split(":")[1];
    let part = hour > 12 ? "pm" : "am";

    min = (min + "").length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour + "").length == 1 ? `0${hour}` : hour;

    return `${hour}:${min} ${part}`;
  };
  // const submitHandler = () => {
  //   axios("https://cs-nr.kapiva.in/public/doc_consult/appointment/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     data: {
  //       data: {
  //         Customer: {
  //           first_name: allValues.firstname,
  //           last_name: allValues.lastname,
  //           email_id: allValues.email,
  //           cell_phone: "+91" + allValues.contact,
  //           comment: allValues.comment,
  //           utm_source: UtmSorce,
  //         },
  //         Appointment: {
  //           service_key: serviceId,
  //           start_time:
  //             getDateFormat({ date: value }) + "T" + allValues.time + "Z",
  //           end_time: getDateFormat({ date: value }) + "T" + endindex + "Z",
  //         },
  //       },
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         if (response.data.error === "Slot not available") {
  //           console.log(response.error);
  //           alert("Slots not available..");
  //         } else if (response.data.staff !== null) {
  //           console.log();
  //           alert("Appointment booked Successfully...");
  //           setIsActive(false);
  //           window.location.reload();
  //         } else {
  //           alert(
  //             "Appointment booking is unavailable please try again after some time"
  //           );
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       if (error) {
  //         alert("Slots not available..");
  //       }
  //     });
  // };

  return (
    <div className="popup">
      <div className="thankyou-content">
        <h1>Thankyou ${allValues.firstname}</h1>
        <br />
        <h3>
          Your Appointment is booked for ${showdateFormat(allValues.date)} at $
          {converTime(allValues.time)}
        </h3>
        <br />
        <h3>
          Please Visit <a href="www.kapiva.in">Kapiva.in</a>
          to know more about us and Products we have.
        </h3>
      </div>

      <button
        className="popup-submit-button"
        onClick={() => window.location.reload()}
      >
        Submit
      </button>
    </div>
  );
};

export default Popup;
