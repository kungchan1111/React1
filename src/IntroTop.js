import React from "react";
import face from "./images/Ellipse 1.svg";
import "./IntroTop.css";

export default function IntroTop() {
  return (
    <div className="introTop">
      <div className="it-top flex-space">
        <div className="itt-left">
          <span>Hi, I am John,</span>
          <span>Creative Technologist</span>
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
        </div>
        <div className="itt-right">
          <img src={face} alt="face" />
        </div>
      </div>
      <div className="itt-bottom">
        <button type="button">Download Resume</button>
      </div>
    </div>
  );
}
