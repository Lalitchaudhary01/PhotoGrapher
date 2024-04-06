import React from "react";

const Bottom = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="flex justify-around items-center mb-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          LinkedIn
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          Twitter
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-700"
        >
          Instagram
        </a>
        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          className="text-gray-500 hover:text-gray-700"
        >
          Email
        </a>
        {/* Contact Number */}
        <span className="text-gray-500">Contact: +1 (123) 456-7890</span>
      </div>
      {/* Copyright */}
      <div className="text-center text-gray-500">
        &copy; 2024 Lalit Chaudhary. All rights reserved.
      </div>
    </div>
  );
};

export default Bottom;
