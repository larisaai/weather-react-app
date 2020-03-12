import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "#2c3e50",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px"
  };

  return (
    <nav>
      <ul className="nav-links">
        <li>
            <Link style={navStyle} to="/home"> Home</Link>
        </li>
        <li>
            <Link style={navStyle} to="/forecast">Forecast</Link>
        </li>

      </ul>
    </nav>
  );
}