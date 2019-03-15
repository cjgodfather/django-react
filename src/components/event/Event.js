import React from "react";
import classes from "../event/Event.css";

const Event = props => {
  return (
    <div className={classes.event}>
      <img src="../../src/assets/images/manhattan.jpg" alt="manhattan" />
      <div>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <a href="#">See details</a>
      </div>
    </div>
  );
};

export default Event;
