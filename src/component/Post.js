import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

function Post({ title, date, team, content }) {
  return (
    <div className="p-wrap">
      <span>{title}</span>
      <div>
        <span>{date}</span>
        <span>|</span>
        <span>{team}</span>
      </div>
      <span>{content}</span>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
