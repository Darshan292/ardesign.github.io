"use client";

import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed items-center w-full mx-auto p-6 z-10 grid grid-flow-col">
      {/* Logo */}
      <div className="text-2xl font-bold text-black grid-cols-1 lg:ml-40 md:ml-32">
        <a href="#">LOGO</a>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-16 grid-cols-1 ml-auto mr-40">
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
      <div className="md:hidden ml-auto">
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
