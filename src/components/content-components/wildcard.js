import React, { Component } from "react";
class Widecard extends Component {

  func(link){
    if (link) {
      return (<a href={this.props.link} target="_blank" rel="noreferrer noopener">Here</a>)
    }
    return "Not available"
  }
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <h4 class="secondtext">{this.props.where}</h4>
          <h4 class="secondtext">
            {this.props.from} - {this.props.to}
          </h4>
          <h4>
            Link: {this.func(this.props.link)}
          </h4>
        </div>
      </div>
    );
  }
}
export default Widecard;
