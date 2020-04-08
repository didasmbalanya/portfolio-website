import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/nav-components/navbar";
import Social from "./components/content-components/social";
import Home from "./components/content-components/home";
import About from "./components/content-components/about";
import "./App.css";
// import Profile from "./components/content-components/profile.component"

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
          {/* <Profile></Profile> */}
          <About></About>
        </Route>
      </div>
    </div>
  );
}

export default App;
