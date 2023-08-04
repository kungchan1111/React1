import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Intro from "./Intro";
import Blogs from "./Blogs";
import Works from "./Works";
import Contact from "./Contact";
import Wdetail from "./Wdetail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Intro />,
        },
        {
          path: "/blog",
          element: <Blogs />,
        },
        {
          path: "/work",
          element: <Works />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/work/:workId",
          element: <Wdetail />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
