import React from "react";
import profileImage from "../assests/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="flex">
      <div className="text-bold my-12 mx-20 max-w-lg p-6 bg-gray-200 rounded-lg shadow-lg">
        <p className="text-lg text-gray-600">Front-end Developer</p>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hello, my name is Lalit Chaudhary
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A dedicated front-end developer with a flair for creating immersive
            web experiences that blend seamless functionality with captivating
            design, ensuring every visit is a journey of delight and discovery.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Download CV
          </button>
          <ul className=" mt-4 space-y-4">
            <li>
              <a
                href="https://www.linkedin.com/in/lalit-chaudhary-1a816a21b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-600 hover:text-blue-800 text-2xl"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lalitchaudhary01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-gray-800 hover:text-gray-900 text-2xl"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className="text-blue-400 hover:text-blue-600 text-2xl"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-bold my-12 mx-20 max-w-lg p-6 bg-gray-200 rounded-lg shadow-lg">
        <img src={profileImage} alt="Profile" className="mx-auto" />
      </div>
    </div>
  );
};

export default Home;
