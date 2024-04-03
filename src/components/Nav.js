import React from "react";

const Nav = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <img className="h-8" src={logo} alt="Logo" /> */}
            <h1 className="text-bold text-xl">ShutterSurprise</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block ">
            <ul className="ml-10 flex items-center space-x-4 my-5 ">
              <li>
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Home
                </span>
              </li>
              <li>
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Portfolio
                </span>
              </li>
              <li>
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Services
                </span>
              </li>
              <li>
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  About
                </span>
              </li>
              <li>
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
