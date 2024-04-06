import React, { useState } from "react";
import project1Image from "../assets/CSS.png";
import project2Image from "../assets/profile.png";
import project3Image from "../assets/Bootstrap.svg";
import project4Image from "../assets/Git.svg";
// Import other project images as needed

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Define your project data here
  const projectsData = [
    {
      name: "Project 1",
      image: project1Image,
      technologies: "HTML, CSS, JavaScript, redux",
      link: "https://vercel.com/",
    },
    {
      name: "Project 2",
      image: project2Image,
      technologies: "React, Redux, Tailwind CSS",
      link: "https://vercel.com/",
    },
    {
      name: "Project 3",
      image: project3Image,
      technologies: "Node.js, Express, MongoDB",
      link: "https://vercel.com/",
    },
    {
      name: "Project 4",
      image: project4Image,
      technologies: "Git, GitHub, GraphQL",
      link: "https://vercel.com/",
    },
    {
      name: "Project 1",
      image: project1Image,
      technologies: "HTML, CSS, JavaScript",
      link: "https://vercel.com/",
    },
    {
      name: "Project 2",
      image: project2Image,
      technologies: "React, Redux, Tailwind CSS",
      link: "https://vercel.com/",
    },
    {
      name: "Project 3",
      image: project3Image,
      technologies: "Node.js, Express, MongoDB",
      link: "https://vercel.com/",
    },
    {
      name: "Project 4",
      image: project4Image,
      technologies: "Git, GitHub, GraphQL",
      link: "https://vercel.com/",
    },
  ];

  const projectsToShow = showAllProjects
    ? projectsData
    : projectsData.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects Showcase</h1>
      <div className="grid grid-cols-2 gap-4">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-4 rounded-lg"
          >
            {/* Project Image */}
            <div className="w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Project Name and Technologies */}
            <div className="w-1/2 ml-4">
              <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {project.technologies}
              </p>
              {/* View Project Button */}
              <div className="text-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More Projects Button */}
      {!showAllProjects && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAllProjects(true)}
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
