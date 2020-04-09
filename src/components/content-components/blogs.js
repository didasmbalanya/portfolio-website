import React, { Component } from "react";
import HeaderReuse from "./header";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="condiv blogs">
        <HeaderReuse header="My Blogs" />
        <p>Work in progress</p>
      </div>
    );
  }
}
export default Blogs;
