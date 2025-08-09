import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md top-0 left-0 w-full z-50 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <ReactTyped
            strings={["Let's Code! 😎", "Hey What's Up?"]}
            typeSpeed={40}
            backSpeed={50}
            className="text-[#22e2a5] text-[30px] font-bold"
            loop
          />
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-white ">
          <li>
            <a href="#home" className="hover:text-fuchsia-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-fuchsia-600">
              About
            </a>
          </li>
          <li>
            <a href="#skill" className="hover:text-fuchsia-600">
              Skill
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-fuchsia-600">
              Project
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-fuchsia-600">
              Eduction
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-fuchsia-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2 absolute right-0 z-10 w-full">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>
              <a href="#home" clssName="block hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="block hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
                Skill
              </a>
            </li>
            <li>
              <a href="#project" className="block hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
                Project
              </a>
            </li>
            <li>
              <a href="#education" className="block hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
                Eduction
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
                 Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
