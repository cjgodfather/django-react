import React, { Component } from "react";
import Event from "../event/Event";
import classes from "../eventlist/EventList.css";
import axios from "axios";

class EventList extends Component {
  state = { event: [] };

  componentDidMount = () => {
    axios.get("http://127.0.0.1:8000/api/events/").then(res => {
      this.setState({ event: res.data });
      console.log(res.data);
    });
  };

  render() {
    let eveList = this.state.event.map((el, idx) => {
      return <Event key={idx} name={el.name} description={el.description} />;
    });

    return <div className={classes.eventlist}>{eveList}</div>;
  }
}

export default EventList;
