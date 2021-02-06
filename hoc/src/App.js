import React, { Component } from "react";
import HoverCounter from "./HoverCounter";
import "./App.css";
import ClickCounter from "./ClickCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverCounter />
        <ClickCounter />
      </div>
    );
  }
}
export default App;
