import React, { Component } from "react";
import HeaderReuse from "./header";
import Social from "./social";
import SampleCard from "./card";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        "NodeJs",
        "Express",
        "Graphql",
        "HTML",
        "CSS",
        "JS",
        "TYPESCRIPT",
        "REACT",
        "REDUX",
        "ANGULAR",
        "SQL",
        "DOCKER",
        "ORMS",
      ],
      general: [
        "Leadership",
        "creative",
        "Problem-sloving",
        "Good communication",
        "Team Player",
      ],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <HeaderReuse header="My Skills" />
        <div className="skills-box">
          <ul>
            <SampleCard
              value={this.state.myskills}
              cardTitle="Technical skills"
            />
          </ul>
          <ul>
            <SampleCard value={this.state.general} cardTitle="General" />
          </ul>
        </div>
        <Social />
      </div>
    );
  }
}
export default Skills;
