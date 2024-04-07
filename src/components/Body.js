import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
// import Contact from "./Contact";
import Bottom from "./Bottom";

const Body = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <About />
      {/* <Contact /> */}
      <Bottom />
    </div>
  );
};

export default Body;
