import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>
        <Link
          className={this.activeItem}
          to={this.props.toLink}
          onClick={this.props.active.bind(this, this.props.item)}
        >
          {this.props.item}
        </Link>
      </li>
    );
  }
}

export default NavItem;
