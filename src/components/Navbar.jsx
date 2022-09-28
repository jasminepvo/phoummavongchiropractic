import React from "react";
import Logo from '../assets/logo-light cropped.png'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <nav>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        <button>Login</button>
      </nav>
    </div>
  )
}