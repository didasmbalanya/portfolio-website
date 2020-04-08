import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./content.css";

const imageLink =
  "https://us.123rf.com/450wm/tigatelu/tigatelu1507/tigatelu150700238/42070442-stock-vector-cartoon-emoticon-giving-thumb-up.jpg?ver=6";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1 className="title-home">
          <span>Didas Mbalanya: </span><br/>
          <ReactTypingEffect
            className="typingeffect "
            text={["Backend Software Engineer", "your go to guy", "Leader", "most of all", "your friend! :)"]}
            speed={40}
            eraseDelay={700}
            typingDelay={1000}
          />
          <br />
        </h1>
        <img src={imageLink} alt={"profile"} className="profilepic"></img>
      </div>
    );
  }
}
export default Home;
