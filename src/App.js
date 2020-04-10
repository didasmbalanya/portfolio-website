import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/nav-components/navbar";
import Social from "./components/content-components/social";
import Home from "./components/content-components/home";
import About from "./components/content-components/about";
import Education from "./components/content-components/education";
import Skills from "./components/content-components/skills";
import PostViewer from "./components/content-components/blogs";
import Projects from "./components/content-components/projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
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
            <PostViewer />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
