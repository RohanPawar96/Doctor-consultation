import React from "react";
import axios from "axios";

function Therapys({ service, setServiceID, setSlots, slots }) {
  const setService = (service) => {
    console.log(service);
    setServiceID(service);
    axios
      .get("https://kapiva.app/api/get_availability_slots.php", {
        params: { service_id: service },
      })
      .then((resposnse) => {
        console.log(resposnse.data.service_slots);
        setSlots(resposnse.data.service_slots);
      });
  };
  function checkData(id) {
    var checkbox = document.getElementById(id);
    if (checkbox.checked) {
      document.getElementById(`therapy-${id}`).style.border =
        "3px solid #80a03c";
      document.getElementById(id).style.display = "block";
      document.getElementById(id).style.accentColor = "#80a03c";
    } else {
      document.getElementById(`therapy-${id}`).style.border = "1px solid black";
      document.getElementById(id).style.display = "none";
    }
  }

  function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName("check");
    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
    });
  }
  return (
    <div className="therapy">
      <input
        type="checkbox"
        name={service.service_name}
        onClick={(event) => {
          setService(event.currentTarget.value);
          checkData(event.currentTarget.id);
          onlyOne(event.currentTarget.name);
        }}
        className="therapy-input"
        id={service.service_name}
        value={service.service_id}
      />
      <label
        //
        id={"therapy-" + service.service_name}
        for={service.service_name}
      >
        <img
          src={
            service
              ? require("../assets/img/" + service.service_name + ".png")
              : ""
          }
          alt=""
        />
        <p>{service.service_name}</p>
      </label>
    </div>
  );
}

export default Therapys;
