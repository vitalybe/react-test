import React, { Component } from "react";
import logo from "./logo.svg";
import posed, { PoseGroup } from "react-pose";
import "./App.css";

function tooltipPosedConfig() {
  const xLimit = 30;
  const duration = 200;
  const delay = duration + 100;

  return {
    initial: {
      opacity: 0,
      x: ({ enterLeft }) => (enterLeft ? -xLimit : xLimit),
      transition: { duration: duration },
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: { duration: duration, delay: delay },
    },
    exit: {
      opacity: 0,
      x: ({ exitLeft }) => (exitLeft ? -xLimit : xLimit),
      transition: { duration: duration },
    },
  };
}

const TooltipPosed = posed.div(tooltipPosedConfig());

class Tooltip extends Component {
  render() {
    return <TooltipPosed className="tooltip" {...this.props} />;
  }
}

class Marker extends Component {
  state = {};

  render() {
    const exitLeft = this.props.selectedId < this.props.id;
    const enterLeft = this.props.previousMarkerId < this.props.id;
    console.log(`enter left ${this.props.id}: ${enterLeft}`);

    return (
      <div className="marker" onMouseEnter={this.props.onActive}>
        <PoseGroup preEnterPose={"initial"} exitLeft={exitLeft} enterLeft={enterLeft}>
          {this.props.isSelected ? <Tooltip key={this.props.id} /> : null}
        </PoseGroup>
      </div>
    );
  }
}

class App extends Component {
  state = {
    selectedMarkerId: 0,
    previousMarkerId: 0,
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
            key={id}
            id={id}
            isSelected={this.state.selectedMarkerId === id}
            selectedId={this.state.selectedMarkerId}
            previousMarkerId={this.state.previousMarkerId}
            onActive={() => this.setState({ selectedMarkerId: id, previousMarkerId: this.state.selectedMarkerId })}
          />
        ))}
      </div>
    );
  }
}

export default App;
