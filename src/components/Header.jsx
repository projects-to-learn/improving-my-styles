import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
