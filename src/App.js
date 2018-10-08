import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class FunkyFlex extends Component {
  render() {
    return (
      <div className="parent">
        <div className="top">Top</div>
        {!this.props.drillDown && <div className="main">Main</div>}
        <div className={"bottom" + (this.props.drillDown ? " expanded" : "")}>
          <div className="selectionBar">Bottom</div>
          {this.props.drillDown && (
            <div className="additional">
              <div className="data">Bla1</div>
              <div className="data">Bla2</div>
              <div className="data">Bla3</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class App extends Component {
  state = { drillDown: false };

  render() {
    return (
      <div>
        <FunkyFlex drillDown={this.state.drillDown} />
        <button onClick={() => this.setState({ drillDown: !this.state.drillDown })}>Toggle</button>
      </div>
    );
  }
}

export default App;
