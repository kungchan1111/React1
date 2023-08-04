import React from "react";
import "./Wdetail.css";
import Img1 from "./images/Rectangle 4.svg";
import Img2 from "./images/Rectangle 5.svg";
import Img3 from "./images/Rectangle 6.svg";

export default function Wdetail() {
  return (
    <div className="w-detail">
      <span>Designing Dashboards with usability in mind</span>
      <div>
        <span>2020</span>
        <span>Dashboard, User Experience Design</span>
      </div>
      <span>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </span>
      <img src={Img1} alt="" />
      <span>Heading 1</span>
      <span>Heading 2</span>
      <span>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </span>
      <img src={Img2} alt="" />
      <img src={Img3} alt="" />
    </div>
  );
}
