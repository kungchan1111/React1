/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, changeIsOpen] = useState(false);
  const toggleIsOpen = () => {
    changeIsOpen(!isOpen);
  };
  return (
    <div className="header flex-space">
      <div className="h-left">
        <Link to="/">Hi</Link>
      </div>
      <div
        className={isOpen ? "h-right flex-space active" : "h-right flex-space"}
      >
        <NavLink
          to="/work"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="m-h-hamburger">
        <div
          className={isOpen ? "menu hamburger open" : "menu hamburger"}
          onClick={toggleIsOpen}
        >
          <div className="icon" />
        </div>
      </div>
    </div>
  );
}
