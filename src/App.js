import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Swiper from "react-id-swiper";
import "react-id-swiper/src/styles/css/swiper.css";

function MyComponent(props) {
  return <div className="slide">Awesome slide</div>
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Div slides work as expected</h1>
        <Swiper>
          <div className="slide">Awesome slide</div>
          <div className="slide">Awesome slide</div>
          <div className="slide">Awesome slide</div>
        </Swiper>

        <h1>Component slides do not work</h1>
        <Swiper>
          <MyComponent/>
          <MyComponent/>
          <MyComponent/>
        </Swiper>

        <h1>I can make it work by wrapping each slide with a div</h1>
        <Swiper>
          <div><MyComponent/></div>
          <div><MyComponent/></div>
          <div><MyComponent/></div>
        </Swiper>
      </div>
    );
  }
}

export default App;
