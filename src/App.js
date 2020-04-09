import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/nav-components/navbar";
import Social from "./components/content-components/social";
import Home from "./components/content-components/home";
import About from "./components/content-components/about";
import "./App.css";
import Education from "./components/content-components/education";
import Skills from "./components/content-components/skills";
import Blogs from "./components/content-components/blogs";
import Projects from "./components/content-components/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Route exact path="/">
          {" "}
          <Home />
          <Social />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </div>
    </div>
  );
}

export default App;
