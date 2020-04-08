import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/nav-components/navbar";
import Social from "./components/content-components/social";
import Home from "./components/content-components/home";
import Profile from "./components/content-components/profile.component"
import "./App.css";

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
          <Profile></Profile>
        </Route>
      </div>
    </div>
  );
}

export default App;
