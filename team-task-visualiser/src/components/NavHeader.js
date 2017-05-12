import React from "react";
import { Link } from "react-router-dom";

const NavHeader = ({ user }) => {
  return (
    <div>
      {user.isAuthed && <span>Welcome, {user.username}</span>}
      {!user.isAuthed && <span>Guest mode</span>}
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </div>
  );
};

export default NavHeader;
