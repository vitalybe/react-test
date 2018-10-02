import React, { Component } from "react";
import logo from "./logo.svg";
import posed, { PoseGroup } from "react-pose";
import "./App.css";

const TooltipPosed = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

class Tooltip extends Component {
  render() {
    return <TooltipPosed className="tooltip" />;
  }
}

class Marker extends Component {
  state = {};

  render() {
    return (
      <div
        className="marker"
        onMouseEnter={() => {
          console.log("enter");
          return this.setState({ mouseOver: true });
        }}
        onMouseLeave={() => {
          console.log("leave");
          return this.setState({ mouseOver: false });
        }}>
        <PoseGroup>{this.state.mouseOver ? <TooltipPosed className="tooltip" key={this.props.id} /> : null}</PoseGroup>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="landscape">
        <Marker id={1} />
        <Marker id={2} />
        <Marker id={3} />
      </div>
    );
  }
}

export default App;
