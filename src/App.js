import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import Layout from "./hoc/Layout";
import Home from "./container/Home";
import LoginUser from "./components/loginUser";
import RegisterUser from "./components/RegisterUser";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/register" component={RegisterUser} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
