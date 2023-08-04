import React from "react";
import "./Footer.css";
import facebook from "../images/fb.svg";
import instagram from "../images/insta.svg";
import twitter from "../images/X.svg";
import linedin from "../images/Linkedin.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-top flex-space">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={linedin} alt="" />
      </div>
      <div className="f-btm">
        <span>Copyright ©2020 All rights reserved</span>
      </div>
    </div>
  );
}
