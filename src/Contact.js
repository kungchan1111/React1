import React from "react";
import "./Contack.css";
import banner from "./images/Banner.svg";

export default function Contact() {
  return (
    <div className="contact">
      <img src={banner} alt="" />
      <div className="contactForm">
        <span>Craft Your Dream Project with Me</span>
        <div className="f-wrap">
          <span>Hi I’m*</span>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="f-wrap">
          <span>Company *</span>
          <input type="text" placeholder="My Email ID" />
        </div>
        <div className="f-wrap">
          <span>Contacting with me regarding to *</span>
          <input type="text" placeholder="Subject" />
        </div>
        <div className="f-wrap">
          <span>and here is My Vision about what I want *</span>
          <input type="text" placeholder="Description About the Project" />
        </div>
        <div className="f-wrap">
          <span>Message *</span>
          <input type="text" placeholder="Tell About Somthing..." />
        </div>
        <div className="f-btn f-wrap">
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  );
}
