import React, { useEffect, useState } from "react";
import axios from "axios";

const Buttons = ({ token, setServiceID, setValue, serviceId, setSlots }) => {
  const [serviceName, setServiceName] = useState([]);

  useEffect(() => {
    axios
      .get("https://developer.setmore.com/api/v1/bookingapi/services", {
        params: { "Content-type": "application/json" },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data.services);
        setServiceName(response.data.data.services);
      });
  }, [token]);
  // console.log(serviceName);
  // console.log(serviceName);

  const setService = (service) => {
    setServiceID(service);
    // console.log(service);
    axios
      .get("https://kapiva.app/api/get_availability_slots.php", {
        params: { service_id: service },
      })
      .then((resposnse) => {
        setSlots(resposnse.data.service_slots);
      });
  };

  return (
    <div className="therapys">
      <ul>
        {serviceName !== 0 &&
          serviceName.map((services) => {
            return (
              <li key={services.key}>
                <button
                  type="button"
                  className={"btn btn-outline-success btn-lg option-button "}
                  name="service"
                  value="Weight Management"
                  data-bs-toggle="button"
                  //   aria-aria-pressed="true"
                  onClick={() => setService(services.key)}
                >
                  <p className="buttons" name="service">
                    {services.service_name}
                  </p>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Buttons;
