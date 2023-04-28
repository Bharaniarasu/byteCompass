import React from "react";
import NavBar from "../navbar";
import "./main.scss";

const Main = (props) => {
  return (
    <div className="panel">
      <div className="side_panel">
        <NavBar />
      </div>
      <div className="content_panel">{props.children}</div>
    </div>
  );
};

export default Main;
