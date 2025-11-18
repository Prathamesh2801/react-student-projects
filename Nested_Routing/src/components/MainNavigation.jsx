import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav className="bg-orange-500 text-white  ">
      <ul className="flex items-center justify-center p-5 space-x-10">
        <li>
          <NavLink
            to=""
            style={({ isActive }) => ({
              color: isActive ? "black" : undefined,
              textDecoration: isActive ? "underline" : undefined,
            })}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              color: isActive ? "black" : undefined,
              textDecoration: isActive ? "underline" : undefined,
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="events"
            style={({ isActive }) => ({
              color: isActive ? "black" : undefined,
              textDecoration: isActive ? "underline" : undefined,
            })}
          >
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
