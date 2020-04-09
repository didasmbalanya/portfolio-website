import React, { Component } from "react";
import HeaderReuse from "./header";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="condiv projects">
        <HeaderReuse header="My Projects" />
        <p>Work in progress</p>
      </div>
    );
  }
}
export default Projects;
