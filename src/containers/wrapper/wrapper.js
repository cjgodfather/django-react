import React from "react";
import classes from "./wrapper.css";
import EventList from "../../components/eventlist/EventList";
import Navbar from "../../components/navbar/navbar";

const Wrapper = props => {
  return (
    <div className={classes.wrapper}>
      <Navbar className={classes.navbar} />
      <EventList className={classes.eventlist} />
      <footer className={classes.footer}>footer</footer>
    </div>
  );
};

export default Wrapper;
