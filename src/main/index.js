import React from "react";
import NavBar from "../navbar";
import "./main.scss";

const Main = (props) => {
  return (
    <div className="row">
      <div className="navbar col-2 p-0 m-0 align-items-start">
        <NavBar />
      </div>
      <div className="content col-10 ps-0">{props.children}</div>
    </div>
  );
};

export default Main;
