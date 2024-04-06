import React from "react";
import htmlImage from "../assets/HTML.png";
import cssImage from "../assets/CSS.png";
import tailwindImage from "../assets/Tailwind.png";
import bootstrapImage from "../assets/Bootstrap.svg";
import gitImage from "../assets/Git.svg";
import githubImage from "../assets/Github.svg";
import graphqlImage from "../assets/Graphql.svg";
import nodejsImage from "../assets/NodeJs.svg";
import expressImage from "../assets/Express.png";
import sassImage from "../assets/Saas.svg";
import vercelImage from "../assets/Vercel.svg";
import nextImage from "../assets/Next.svg";
import mongodbImage from "../assets/MongoDB.svg";
import javascriptImage from "../assets/Javascript.svg";
import reactImage from "../assets/React.png";
import reduxImage from "../assets/Redux.svg";

const Skills = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4 text-center bg-gray-200 rounded-lg shadow-lg">
        Skills
      </h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="font-bold my-5 mx-8 ">
            <span className="text-8xl text-red-500">M</span>
            <span className="text-6xl text-red-500">e and</span>
            <p className="text-6xl text-red-500"> My Tech Stack </p>
          </div>
          <div className="text-bold mx-10 text-1xl">
            <p className=" text-bold">
              Hi Everyone, My name is Lalit Chaudhary. I am a Front-end Web
              Developer and have been working for the last 6 months. Currently,
              I am a student in my 1st year.
            </p>
            <p>
              As a web developer, passion and skill are essential qualities for
              creating outstanding projects. I'm excited to collaborate with
              someone who is enthusiastic about web development. Together, we
              can bring your project to life with cutting-edge technologies,
              innovative designs, and flawless functionality. Whether it's a
              responsive website, a dynamic web application, or an interactive
              user interface, I'm confident in my abilities to deliver
              exceptional results. Let's work together and create something
              truly remarkable that exceeds your expectations!
            </p>
          </div>
        </div>
        <div className="w-1/2 my-6 flex flex-wrap justify-center items-center gap-4">
          <img
            src={htmlImage}
            alt="HTML"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={cssImage}
            alt="CSS"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={tailwindImage}
            alt="Tailwind CSS"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={bootstrapImage}
            alt="Bootstrap"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={gitImage}
            alt="Git"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={githubImage}
            alt="GitHub"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={graphqlImage}
            alt="GraphQL"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={nodejsImage}
            alt="Node.js"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={expressImage}
            alt="Express"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={sassImage}
            alt="Sass"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={vercelImage}
            alt="Vercel"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={nextImage}
            alt="Next.js"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={mongodbImage}
            alt="MongoDB"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={javascriptImage}
            alt="JavaScript"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={reactImage}
            alt="React"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
          <img
            src={reduxImage}
            alt="Redux"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
