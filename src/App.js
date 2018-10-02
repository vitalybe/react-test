import React, { Component } from "react";
import logo from "./logo.svg";
import posed, { PoseGroup } from "react-pose";
import "./App.css";

const TooltipPosed = posed.div({
  initial: {
    opacity: 0,
    x: 30,
    transition: { duration: 200 },
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 200, delay: 300 },

  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 200 },
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
      <div className="marker" onMouseEnter={this.props.onActive}>
        <PoseGroup preEnterPose={"initial"}>{this.props.isSelected ? <Tooltip key={this.props.id} /> : null}</PoseGroup>
      </div>
    );
  }
}

class App extends Component {
  state = {
    selectedMarkerId: 0,
  };

  constructor(props) {
    super(props);

    this.markerIds = [1, 2, 3];
  }

  render() {
    return (
      <div className="landscape">
        {this.markerIds.map(id => (
          <Marker
            id={id}
            isSelected={this.state.selectedMarkerId === id}
            onActive={() => this.setState({ selectedMarkerId: id })}
          />
        ))}
      </div>
    );
  }
}

export default App;
