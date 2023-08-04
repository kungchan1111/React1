/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import "./Work.css";
import { useNavigate } from "react-router-dom";

function Work({ id, img, title, year, category, content }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-wrap"
      onClick={() => {
        navigate(`/work/${id}`);
      }}
    >
      <div className="wr-left">
        <img src={`./images/${img}`} alt="" />
      </div>
      <div className="wr-right">
        <span>{title}</span>
        <div>
          <span>{year}</span>
          <span>{category}</span>
        </div>
        <span>{content}</span>
      </div>
    </div>
  );
}

Work.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Work;
