import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Swiper from "react-id-swiper";
import "react-id-swiper/src/styles/css/swiper.css";

class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
          <div className="slide">Slide 1</div>
          <div className="slide">
            Slide 2 <button onClick={() => alert("hi")}>Test</button>
          </div>
          <div className="slide">Slide 3</div>
        </Swiper>
      </div>
    );
  }
}

export default App;
