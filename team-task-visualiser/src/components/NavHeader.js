import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <ul>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/tasks">Tasks</Link></li>
    </ul>
  );
};

export default NavHeader;