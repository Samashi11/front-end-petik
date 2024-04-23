import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/table-course"}>Course</NavLink>
        </li>
        <li>
          <NavLink to={"/trainer-course"}>Trainer</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
