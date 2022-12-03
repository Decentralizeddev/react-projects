import React from "react";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import "../../style.css";

function Skills() {
  return (
    <>
      <div className="wrap">
        <h1 className="project-heading">
          Professional{" "}
          <strong className="purple">Skills For Full Stack Development</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />
      </div>
    </>
  );
}

export default Skills;
