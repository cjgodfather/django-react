import React from "react";
import classes from "../wrapper/wrapper.css";

const Wrapper = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navbar}>Navbar</div>
      <main className={classes.main}>Events</main>
      <footer className={classes.footer}>footer</footer>
    </div>
  );
};

export default Wrapper;
