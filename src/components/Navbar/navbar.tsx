"use client";

import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-transparent ">
      {/* Logo */}
      <div className="text-2xl font-bold text-black ml-40">
        <a href="#">LOGO</a>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-16 mr-40">
        <a
          href="#home"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          Home
        </a>
        <a
          href="#work"
          className="text-black hover:text-blue-500 transition duration-300"
        >
          Work
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="p-2 text-black border rounded hover:bg-gray-100"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
