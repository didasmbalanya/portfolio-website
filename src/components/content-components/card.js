import React from "react";

const SampleCard = (props) => {
  return (
    <div >
      <div className="">
        <h3 className="card-header">{props.cardTitle}</h3>
        <ul>
          {props.value.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SampleCard;
