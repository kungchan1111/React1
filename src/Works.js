import React from "react";
import Work from "./component/Work";
import "./Works.css";

export default function Works() {
  const data = [
    {
      id: 1,
      img: "Rectangle 30.svg",
      title: "Designing Dashboards",
      year: 2020,
      category: "Dashboard",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      img: "Rectangle 32.svg",
      title: "Vibrant Portraits of 2020",
      year: 2018,
      category: "Illustration",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      img: "Rectangle 34.svg",
      title: "36 Days of Malayalam type",
      year: 2016,
      category: "Typography",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      img: "Rectangle 40.svg",
      title: "Components",
      year: 2018,
      category: "Components, Design",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="work">
      <span>Work</span>
      <div className="w-btm">
        {data.map((v, i) => {
          return (
            <Work
              key={i}
              img={v.img}
              title={v.title}
              year={v.year}
              category={v.category}
              content={v.content}
            />
          );
        })}
      </div>
    </div>
  );
}
