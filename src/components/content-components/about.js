import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import HeaderReuse from "./header";

const linkToChallenges = "https://github.com/didasmbalanya/Code-challenges";
class About extends Component {
  render() {
    return (
      <div className="condiv about-text">
        <HeaderReuse header="Who am I ?" />

        <h2 >
          <ReactTypingEffect
            className="typingeffect type-auto"
            text={[
              "Backend Software Engineer",
              "your go to guy",
              "A friend",
              "Lol",
            ]}
            speed={50}
            eraseDelay={700}
            typingDelay={1000}
          />
        </h2>
        <div className="about-heading">
          <h1>Didas Mbalanya</h1>
          <h3>Full Stack Web Developer</h3>
          <h3>
            Preferred: <u>Backend Engineer</u>
          </h3>
          <h3>
            Nationality: <u>Kenyan</u>
          </h3>
          <h3>
            Phone number: <u>+254705520482 / +250786922399</u>
          </h3>
          <h3>
            Email: <u>didasmbalanya@gmail.com</u>
          </h3>
        </div>
        <div className="about-paragraph">
          <p>
            I started my journey in the world of computers as an adult, age 23.
            Around the year 2018. This was after I had completed my degree in
            Actuarial Science. It all started with FizzBuzz, after which more
            and more challenges made it interesting. Before I realized, software
            engineering became my center of interest. I love the idea of solving
            problems with code Because of this, I have done a lot of coding
            challenges, available{" "}
            <span>
              <a
                href={linkToChallenges}
                target="_blank"
                rel="noreferrer noopener"
              >
                here{" "}
              </a>
            </span>{" "}
            on my github repo
          </p>
          <br />
          <p>
            I am a willing learner. I believe two will always be better than
            one. That is to say, I am a team player, problem solver and
            dedicated to the process. I am very passionate about
            problem-solving, especially when it comes to doing it with code. I
            give my all, to satisfy not just my team but for my personal growth
            as well. I believe in working hard smartly. Given an opportunity I
            will be nothing short of a success story.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
