import React from "react";
import "./IntroMiddle.css";
import Post from "./component/Post";

export default function IntroMiddle() {
  const data = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      team: "Design, Pattern",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      team: "Figma, Icon Design",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <div className="it-middle">
      <div className="itm-top flex-space">
        <span>Recent posts</span>
        <span>View all</span>
      </div>

      <div className="m-btm flex-space">
        {data.map((v, i) => {
          return (
            <Post
              key={i}
              title={v.title}
              date={v.date}
              team={v.team}
              content={v.content}
            />
          );
        })}
      </div>
    </div>
  );
}
