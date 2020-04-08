import React from "react";
import Profile from "./components/content-components/profile.component"
import Navbar from "./components/nav-components/navbar"
import "./App.css";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className="main-container"> 
        <Profile></Profile>
        <p>Brrrrr</p>
      </div>
    </div>
  );
}

export default App;
