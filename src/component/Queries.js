import React from "react";
import { dropdown } from "../utils/common";

function Queries() {
  var count = 0;
  function dropdown(id) {
    console.log(id);
    var qa = id.split("-")[1];
    count += 1;
    if (count % 2 == 0) {
      document.getElementById(qa).style.display = "block";
      document.getElementById(`review-${qa}`).style.backgroundImage =
        " url('./img/up-arrow.png') ";
    } else {
      document.getElementById(qa).style.display = "none";
      document.getElementById(`review-${qa}`).style.backgroundImage =
        " url('./img/down-arrow.png') ";
    }
  }
  return (
    <div className="review">
      <p
        className="question"
        id="review-1"
        onClick={(event) => dropdown(event.currentTarget.id)}
      >
        What are the online Ayurvedic consultation charges?
      </p>
      <p className="answer" id="1">
        It is completely Free, there are no charges for your online Ayurvedic
        Consultation at Kapiva.
      </p>
    </div>
  );
}

export default Queries;
