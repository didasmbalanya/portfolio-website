import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import HeaderReuse from "./header";
import "./content.css";

const imageLink =
  "https://lh3.googleusercontent.com/jiTrLhRpcbaKVWYwIQUA3yzn81K_kJ0_l2bmW48AIey6dor6T5Hv3w1VnbbXfiegww2FL7MlVrV1jCYOPsoa_jDRpB_Po2-fObdRnccjyVQv_IJpEq0WhfcqTZKK_XzB7ajGVMJRpZiA9KrEHFHiEaj2o3hVay2NfCHVN532W2gQGgOK6kHhqlHkMknlYuD-i2gRAwYbiKTkUdoGrI0kcsLXZaOwVpCuN2GMqtBTKC7Wq3aYbvaFBftDbH61yMtOJzTYGCdpfDPOmK-uD0UMndn6JdtZqPMNQvQ2GuVWQbkGoeCv6x0lRwFVl-6WgKp2QytC1GhNACqBPlAKy7kQ5L4Pxhib7VRdFMBKUW5zwlWpw-FiFYn5YkkX9R0TrHkY_MuP1o0X6lyg81xRTdSor49C-d5yFADWtdVcSNQjqlFfQPWRFXSQ9Yczb_v4sZuFFSSwppzERez4e0urXiHj5hM2ITM8AlOZ864nTyb1QuQcVFPVnzzOq4xrbmb2A-N4XEa-Wi3X9JXXp4ltsFgOMCDkFXIKYIEf_bCJrEs16msAeVsJrlPGRY07L5FUmxi9B_OG_uFonN8evpsSBB9nSMThJWg-zIYnfmQ-bdXk4JITHF3XeZB3gXzVJpky7LJA9QiJqKbGnGB1W5DOh251Ujq3SKdyWxWHPPdGr_twmuFjsHqpXEzwlI0WBzs9=w1184-h1578-no";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <HeaderReuse header="Didas Mbalanya" />
        <h1 className="header-title">
          <ReactTypingEffect
            className="typingeffect "
            text={[
              "Backend Software Engineer",
              "your go to guy",
              "Leader",
              "most of all",
              "your friend! :)",
            ]}
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
