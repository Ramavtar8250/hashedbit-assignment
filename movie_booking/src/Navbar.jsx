import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
        <Link to="/">
          <img
            src="https://learning.hashedbit.com/static/media/logo_full.48080b71f6a9f2dc3226.png"
            alt="Logo"
            className="h-10"
          />
        </Link>
    </nav>
  );
};

export default Navbar;
