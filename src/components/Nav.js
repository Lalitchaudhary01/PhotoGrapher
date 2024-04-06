import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <img className="h-8" src={logo} alt="Logo" /> */}
            <h1 className="text-bold text-xl">Portfolio</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block ">
            <ul className="ml-10 flex items-center space-x-4 my-5 ">
              <li className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Home
              </li>
              <li className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Skills
              </li>
              <li className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Projects
              </li>
              <li className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                About
              </li>
              <li className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
