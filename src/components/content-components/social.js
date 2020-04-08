import React, { Component } from "react";
import "./content.css"

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/didasmbalanya"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/didas__mbalanya/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/didasmbalanya"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/didas-mbalanya-9a4849a7/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  }
}
export default Social;
