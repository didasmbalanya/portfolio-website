import React, { Component } from "react";

class HeaderReuse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-title">
        <h1 className="">{this.props.header}</h1>
      </div>
    );
  }
}

export default HeaderReuse;
