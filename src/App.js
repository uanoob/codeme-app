import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import Home from "./container/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
