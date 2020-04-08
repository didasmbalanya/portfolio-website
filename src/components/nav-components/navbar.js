import React, { Component } from "react";
import NavItem from "./navItem";
import "./nav.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "Home",
    };
  }

  activeItem = (x) => {
    console.log("active is:", x)
  };

  render() {
    return (
      <nav>
        <ul>
          <NavItem
            item="Home"
            toLink="/"
            active={this.activeItem}
            className="active"
          ></NavItem>
          <NavItem
            item="About"
            toLink="/about"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Education"
            toLink="/education"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Skills"
            toLink="/skills"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Contact"
            toLink="/contact"
            active={this.activeItem}
          ></NavItem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
