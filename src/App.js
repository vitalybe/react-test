import React, { Component } from "react";
import logo from "./logo.svg";
import posed, { PoseGroup } from "react-pose";
import "./App.css";


class Tooltip extends Component {
  render() {
    return <div className="tooltip" />;
  }
}

class Marker extends Component {
  state = {};

  render() {
    return (
      <div
        className="marker"
        onMouseEnter={() => this.setState({ mouseOver: true })}
        onMouseLeave={() => this.setState({ mouseOver: false })}>
        {this.state.mouseOver ? <Tooltip /> : null}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="landscape">
        <Marker />
        <Marker />
        <Marker />
      </div>
    );
  }
}

export default App;
