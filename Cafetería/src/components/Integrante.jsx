import React from "react";
import githubIcon from "../img/github_icon.svg";
import userIcon from "../img/person_icon.svg";

export default function Integrante({ name, userName }) {
  return (
    <>
      <div className="name">
          <img src={userIcon} alt="" className="user-icon" />
          {name}
      </div>

      <div className="link-userName">
        <a href={`https://github.com/${userName}`} target="_blank">
          <img src={githubIcon} alt="" className="github-icon" />
          {userName}
        </a>
      </div>
    </>
  );
}
