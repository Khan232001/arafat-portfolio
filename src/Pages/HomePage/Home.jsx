import React from "react";
import Hero from "./HomePageComponents/Hero";
import About from "./HomePageComponents/About";
import Projects from "./HomePageComponents/Projects";
import Experience from "./HomePageComponents/Experience";
import Skills from "./HomePageComponents/Skills";
import Certificates from "./HomePageComponents/Certificates";
import Contact from "./HomePageComponents/Contact";
import BottomToTop from "../../Shared/BottomToTop";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Certificates></Certificates>
      <BottomToTop></BottomToTop>
      <Contact></Contact>
    </div>
  );
};

export default Home;
