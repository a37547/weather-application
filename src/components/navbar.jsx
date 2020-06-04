import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-warning">
      <Link className="navbar-brand text-white" to={"/weather"}>
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
