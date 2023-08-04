import React from "react";
import "./Blogs.css";
import Post from "./component/Post";

export default function Blogs() {
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
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2020",
      team: "Express, Handlebars",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2020",
      team: "Express, Handlebars",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <div className="blog">
      <span>Blog</span>
      <div className="bl-btm">
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
