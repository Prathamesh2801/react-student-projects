import React from "react";
import "./App.css";
import logo from "./assets/img/logo.webp";
import MoriningBG from "./assets/img/morning.gif";
import AfternoonBG from "./assets/img/afternoon.gif";
import NightBG from "./assets/img/night.gif";
export default function App() {
  var students = [
    "Sonia",
    "Khushi",
    "Bhoomi",
    "Twinkle",
    "Aanchal",
    "Sakshi",
    "Helly",
    "Shweta",
  ];
  var randomNumber = Math.floor(Math.random() * students.length);
  var getHours = new Date(2025, 10, 26, 19, 30, 0).getHours();
  console.log("Current Hour : ", getHours);

  var message = "";
  var backColor = "";

  var customBackground = "";
  if (getHours <= 12) {
    message = "Good Morning";
    // backColor = "yellow"
    customBackground = MoriningBG;

  } else if (getHours <= 18) {
    message = "Good Afternoon";
    customBackground = AfternoonBG
    //  backColor = "orange"
  } else {
    message = "Good Night";
    // backColor = "black"
    customBackground = NightBG
  }

  return (
    <div
      className="main_container"
      style={{ background: `url(${customBackground}) center/contain` }}
    >
      <div className="inner_container">
        <img
          src={logo}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid white",
          }}
        />
        <h1 style={{ margin: "10px" }}>Welcome To Client Side</h1>
        <h2 style={{ margin: "10px" }}>
          {message} {students[randomNumber]}{" "}
        </h2>
        <button className="button" onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    </div>
  );
}
