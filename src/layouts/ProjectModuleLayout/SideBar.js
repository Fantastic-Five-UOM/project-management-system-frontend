import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div>
      <Menu>
        <a className="menu-item" href="/projects-home">
          Home
        </a>
        <a className="menu-item" href="/project-requirement">
          Requirement
        </a>
        <a className="menu-item" href="/project-task">
          Task
        </a>
        <a className="menu-item" href="/project-module">
          Module
        </a>
        <a className="menu-item" href="/budget">
          Budget
        </a>
        <a className="menu-item" href="/document">
          Documents
        </a>
      </Menu>
    </div>
  );
}
