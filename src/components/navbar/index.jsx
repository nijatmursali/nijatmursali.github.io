import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-gray-100 py-2 px-3 border-b shadow">
      <nav className="flex items-center justify-between flex-col md:flex-row">
        <NavLink className={({ isActive }) => (isActive ? "" : "")} to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8494/8494409.png"
            alt="logo"
            className="w-12"
          />
        </NavLink>
        <ul className="flex items-center gap-4 md:gap-10 bold text-xl flex-col md:flex-row">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About me
            </NavLink>
          </li>
        </ul>

        <button className="rounded-full font-bold bg-red-500 py-2 px-3 mt-4 md:mt-0 text-base text-white hover:bg-red-600">
          Contact me
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
