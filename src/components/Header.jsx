/* eslint-disable import/no-unresolved */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-end">
      <ul className="flex w-4/5">
        <li
          className="py-3 px-4 text-dark-40
          hover:font-bold hover:text-dark-10"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="py-3 px-4 text-dark-40
          hover:font-bold hover:text-dark-10"
        >
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
