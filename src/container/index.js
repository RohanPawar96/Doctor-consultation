import "./App.css";
import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";
function App() {
  const timeList = [
    "01:00",
    "01:20",
    "01:40",
    "02:00",
    "02:20",
    "02:40",
    "03:00",
    "03:20",
    "03:40",
    "04:00",
    "04:20",
    "04:40",
    "05:00",
    "05:20",
    "05:40",
    "06:00",
    "06:20",
    "06:40",
    "07:00",
    "07:20",
    "07:40",
    "10:00",
    "10:20",
    "10:40",
    "11:00",
    "11:20",
    "11:40",
    "12:00",
    "12:20",
    "12:40",
  ];
  const [orderedList, setOrderedList] = useState([]);
  useEffect(() => {
    timeList.map((e) => {
      if (e >= "10:00" && e < "12:00") {
        console.log(e);
        setOrderedList(...orderedList, e);
      }
    });
    timeList.map((e) => {
      if (e >= "12:00" && e <= "12:40") {
        console.log(e);
        setOrderedList(...orderedList, e);
      }
    });
    timeList.map((e) => {
      if (e >= "01:00" && e < "10:00") {
        console.log(e);
        setOrderedList(...orderedList, e);
      }
    });
    // timeList.map((e)=> {
    //   console.log(e < "11:00")
    //   if(e < "11:00"){
    //     console.log("inside : " + e)
    //     setOrderedList(...orderedList, e)
    //   }
    // })
  }, []);
  return (
    <div className="App" style={{ flexDirection: "column" }}>
      {}
    </div>
  );
}
export default App;
