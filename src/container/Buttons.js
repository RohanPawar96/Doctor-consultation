import React, { useEffect, useState } from "react";
import axios from "axios";

const Buttons = ({ token, setServiceID }) => {
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
                  onClick={() => setServiceID(services.key)}
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
