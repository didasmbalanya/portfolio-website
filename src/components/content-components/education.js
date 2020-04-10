import React, { Component } from "react";
import Widecard from "./wildcard";
import HeaderReuse from "./header";
import Social from "./social"

const ciscoCert = "https://www.certmetrics.com/cisco/public/transcript.aspx?transcript=DZRER7422EB41SSZ"
class Education extends Component {

  render() {
    return (
      <div className="condiv">
        <HeaderReuse header="Education"/>
        <Widecard
          title="Cisco CCNA CyberOps Security"
          where="Cisco NetAcademy Online"
          from="July 2018"
          to="December 2018"
          link={ciscoCert}
        />
        <Widecard
          title="Bsc. Actuarial Science"
          where="Jomo Kenyatta University of Agriculture and Technology, Nairobi, Kenya"
          from="July 2012"
          to="2015"
        />
        <Social />
      </div>
    );
  }
}
export default Education;
