import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function EventNavigation() {
  return (
    <nav className="bg-pink-500 text-white  ">
      <ul className="flex items-center justify-center p-5 space-x-20">
        <li>
          <NavLink
            to=""
            style={({ isActive }) => ({
              color: isActive ? "black" : undefined,
              textDecoration: isActive ? "underline" : undefined,
            })}
            end
          >
            All Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="new"
            style={({ isActive }) => ({
              color: isActive ? "black" : undefined,
              textDecoration: isActive ? "underline" : undefined,
            })}
          >
            New Event
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
