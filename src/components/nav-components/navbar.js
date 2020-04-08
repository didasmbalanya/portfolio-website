import React, { Component } from "react";
import NavItem from "./navItem";
import "./nav.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  activeItem = (x) => {
    if (this.state.NavItemId ) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <NavItem item="Home" tolink="/" active={this.activeItem}></NavItem>
          <NavItem
            item="About"
            tolink="/about"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Education"
            tolink="/education"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Skills"
            tolink="/skills"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Contact"
            tolink="/contact"
            active={this.activeItem}
          ></NavItem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
