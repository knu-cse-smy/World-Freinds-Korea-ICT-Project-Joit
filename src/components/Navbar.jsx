import React from "react";
import "./Navbar.css"; // CSS 불러오기

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Homepage</li>
        <li>Features</li>
        <li>Traffic Light</li>
        <li>Video</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
}
