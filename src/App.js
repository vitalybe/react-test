import React, { Component } from "react";
import logo from "./logo.svg";
import posed, { PoseGroup } from "react-pose";
import "./App.css";

const TooltipPosed = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 500 },
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: 500 },
  },
});

class Tooltip extends Component {
  render() {
    return <TooltipPosed className="tooltip" {...this.props} />;
  }
}

class Marker extends Component {
  state = {};

  render() {
    return (
      <div
        className="marker"
        onMouseEnter={() => {
          return this.setState({ mouseOver: true });
        }}
        onMouseLeave={() => {
          return this.setState({ mouseOver: false });
        }}>
        <PoseGroup>{this.state.mouseOver ? <Tooltip key={this.props.id} /> : null}</PoseGroup>
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
