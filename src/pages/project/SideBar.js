
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';


export default function SideBar() {
  return (
    
    <Menu>
     <a className="menu-item" href="/">
         Home
       </a>
       <a className="menu-item" href="/requirment">
         Requirement
       </a>
       <a className="menu-item" href="/task">
         Task
       </a>
       <a className="menu-item" href="/module">
         Module
       </a>
       <a className="menu-item" href="/budget">
         Budget
       </a>
       <a className="menu-item" href="/document">
         Documents </a>
         <a className="menu-item" href="/project-Button">
         Button

       </a>
     </Menu>
  );
};


