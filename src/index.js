import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Layout/Layout";
import Intro from "./components/Intro";
import Profile from "./components/Profile/Profile";
import Academics from "./components/Home/Academic";
import Education from "./components/Home/Education";
import Honors from "./components/Home/Honor";
import Publication from "./components/Publications/Publication";
import Conference from "./components/Publications/Conference";
import Responsibilities from "./components/Publications/Responsibilities";
import Students from "./components/Publications/Students";
import Researches from "./components/Publications/Research";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />

    <div className="profileIntro">
      <div className="profileIndex">
        <Profile />
      </div>
      <Profile />
      <Intro />
      <Academics />
    </div>
    <Academics />
    <Education />
    <Honors />
    <Publication />
    <hr />
    <Conference />
    <hr />
    <Responsibilities />
    <hr />
    <Students />
    <hr />
    <Researches />
  </React.StrictMode>
);
